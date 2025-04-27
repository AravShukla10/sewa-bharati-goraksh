import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, File, Menu, X, BookOpen, FileText, Folder, ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCw, Maximize, Minimize } from 'lucide-react';
import './styles/E-bulletin.css';

// Set the pdf.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const EBulletin = () => {
  // Hardcoded PDF list
  const pdfList = [
    {
      id: 1,
      title: "January 2025 Edition",
      url: "/pp2.pdf",
      date: "2025-01-15"
    },
    {
      id: 2,
      title: "February 2025 Edition", 
      url: "/path/to/february-2025.pdf",
      date: "2025-02-15"
    },
   
  ];
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(0.8); 
  const [loading, setLoading] = useState(true);
  

  const [pdfs, setPdfs] = useState(pdfList);
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
  

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTwoPageView, setIsTwoPageView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsTwoPageView(false); // Force single page view on mobile
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  useEffect(() => {
    if (isFullScreen) {
      setScale(1);
    } else {
      setScale(0.8);    // or whatever your default is
    }
  }, [isFullScreen]);
  

  // Handle fullscreen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      const element = document.querySelector('.e-bulletin-pdf-container');
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Function to handle document load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setLoading(false);
  };

  // Navigation functions
  const goToPreviousPages = () => {
    const decrement = isTwoPageView && !isMobile ? 2 : 1;
    setCurrentPage(prevPage => Math.max(prevPage - decrement, 1));
  };

  const goToNextPages = () => {
    const increment = isTwoPageView && !isMobile ? 2 : 1;
    setCurrentPage(prevPage => Math.min(prevPage + increment, numPages));
  };

  // Go to specific page
  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
    }
  };

  // First and last page navigation
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(numPages);

  // Zoom functions
  const zoomIn = () => setScale(prevScale => Math.min(prevScale + 0.2, 2.5));
  const zoomOut = () => setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  const resetZoom = () => setScale(0.8); // Reset to default 0.8

  // Function to change current PDF
  const selectPdf = (index) => {
    setCurrentPdfIndex(index);
    setCurrentPage(1);
    setLoading(true);
    
    // Close sidebar on mobile after selection
    if (isMobile) {
      setSidebarOpen(false);
    }
  };
  
  // Navigate between PDFs
  const goToPreviousPdf = () => {
    if (currentPdfIndex > 0) {
      selectPdf(currentPdfIndex - 1);
    }
  };
  
  const goToNextPdf = () => {
    if (currentPdfIndex < pdfs.length - 1) {
      selectPdf(currentPdfIndex + 1);
    }
  };

  // Toggle view mode between one page and two pages
  const toggleViewMode = () => {
    // Don't allow two-page view on mobile
    if (isMobile) return;
    
    setIsTwoPageView(!isTwoPageView);
    // Reset to first page of current pair to avoid odd page issues
    if (!isTwoPageView) {
      // If switching to two-page view, ensure we start on an odd page
      setCurrentPage(prevPage => prevPage % 2 === 0 ? prevPage - 1 : prevPage);
    }
  };

  // Determine current PDF URL
  const currentPdfUrl = pdfs.length > 0 ? pdfs[currentPdfIndex].url : null;

  return (
    <div className="e-bulletin-container">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="e-bulletin-mobile-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        <span>{sidebarOpen ? 'Close' : 'Editions'}</span>
      </button>
      
      {/* Sidebar */}
      <div className={`e-bulletin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="e-bulletin-sidebar-header">
          <Folder size={20} />
          <h3>Editions</h3>
        </div>
        
        <div className="e-bulletin-sidebar-content">
          {pdfs.map((pdf, index) => (
            <div 
              key={pdf.id}
              className={`e-bulletin-edition ${index === currentPdfIndex ? 'active' : ''}`}
              onClick={() => selectPdf(index)}
            >
              <File size={16} />
              <div className="e-bulletin-edition-info">
                <span className="e-bulletin-edition-title">{pdf.title}</span>
                <span className="e-bulletin-edition-date">{pdf.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* PDF Navigation in Sidebar */}
        <div className="e-bulletin-sidebar-footer">
          <button 
            className="e-bulletin-btn" 
            onClick={goToPreviousPdf}
            disabled={currentPdfIndex <= 0}
          >
            <ArrowLeft size={16} />
            <span>Previous PDF</span>
          </button>
          <button 
            className="e-bulletin-btn" 
            onClick={goToNextPdf}
            disabled={currentPdfIndex >= pdfs.length - 1}
          >
            <span>Next PDF</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      <div className={`e-bulletin-content ${isFullScreen ? 'fullscreen' : ''}`}>
        {/* Simplified top toolbar */}
        <div className="e-bulletin-toolbar">
          <div className="e-bulletin-current-pdf">
            <span>{pdfs[currentPdfIndex]?.title || 'PDF Viewer'}</span>
          </div>
          
          {/* View type and zoom controls only */}
          <div className="e-bulletin-controls">
            {!isMobile && (
              <button 
                className="e-bulletin-btn" 
                onClick={toggleViewMode}
                title={`${isTwoPageView ? 'Single' : 'Double'} page view`}
              >
                {isTwoPageView ? <FileText size={20} /> : <BookOpen size={20} />}
              </button>
            )}
            
            <div className="e-bulletin-zoom">
              <button className="e-bulletin-btn" onClick={zoomOut} title="Zoom out">
                <ZoomOut size={18} />
              </button>
              <button className="e-bulletin-btn" onClick={resetZoom} title="Reset zoom">
                <RotateCw size={18} />
                <span>{Math.round(scale * 100)}%</span>
              </button>
              <button className="e-bulletin-btn" onClick={zoomIn} title="Zoom in">
                <ZoomIn size={18} />
              </button>
            </div>
            
            <button 
              className="e-bulletin-btn e-bulletin-fullscreen-btn" 
              onClick={toggleFullScreen}
              title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullScreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>

        <div className="e-bulletin-pdf-container">
          {loading && <div className="e-bulletin-loading">Loading PDF...</div>}
          
          {currentPdfUrl && (
            <Document
              file={currentPdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={() => console.error("Failed to load PDF")}
              loading={<div className="e-bulletin-loading">Loading PDF...</div>}
              className="e-bulletin-document"
            >
              <div className={`e-bulletin-pages ${isTwoPageView && !isMobile ? 'two-page-view' : 'one-page-view'}`}>
                <div className="e-bulletin-page">
                  <Page 
                    pageNumber={currentPage} 
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={undefined}
                    height={undefined}
                  />
                </div>
                
                {isTwoPageView && !isMobile && currentPage + 1 <= numPages && (
                  <div className="e-bulletin-page">
                    <Page 
                      pageNumber={currentPage + 1} 
                      scale={scale}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={undefined}
                      height={undefined}
                    />
                  </div>
                )}
              </div>
            </Document>
          )}
          
          {!currentPdfUrl && !loading && (
            <div className="e-bulletin-no-pdf">
              <p>No PDFs available.</p>
            </div>
          )}
          
          {/* Fullscreen Navigation Overlay */}
          {isFullScreen && (
  <>
    <div className="e-bulletin-fullscreen-nav">
      <button
        className="e-bulletin-btn"
        onClick={goToPreviousPages}
        disabled={currentPage <= 1}
      >
        <ChevronLeft size={24} />
      </button>
      <div className="e-bulletin-page-info">
        <span>{currentPage}</span>
        {isTwoPageView && !isMobile && currentPage + 1 <= numPages && (
          <>
            <span>-</span>
            <span>{currentPage + 1}</span>
          </>
        )}
        <span> of </span>
        <span>{numPages || '-'}</span>
      </div>
      <button
        className="e-bulletin-btn"
        onClick={goToNextPages}
        disabled={currentPage >= numPages}
      >
        <ChevronRight size={24} />
      </button>
    </div>

    {/* zoom controls rendered as sibling */}
    <div className="e-bulletin-zoom fullscreen-zoom">
      <button className="e-bulletin-btn" onClick={zoomOut} title="Zoom out">
        <ZoomOut size={18} />
      </button>
      <button className="e-bulletin-btn" onClick={resetZoom} title="Reset zoom">
        <RotateCw size={18} />
        <span>{Math.round(scale * 100)}%</span>
      </button>
      <button className="e-bulletin-btn" onClick={zoomIn} title="Zoom in">
        <ZoomIn size={18} />
      </button>
    </div>
  </>
)}

        </div>
        <div className="e-bulletin-bottom-nav">
          <button className="e-bulletin-btn" onClick={goToFirstPage} disabled={currentPage <= 1}>
            <ChevronLeft size={18} />
            <ChevronLeft size={18} style={{ marginLeft: '-8px' }} />
          </button>
          
          <button 
            className="e-bulletin-btn" 
            onClick={goToPreviousPages}
            disabled={currentPage <= 1}
          >
            <ChevronLeft size={20} />
            <span>Prev</span>
          </button>
          
          <div className="e-bulletin-page-info">
            <span>{currentPage}</span>
            {isTwoPageView && !isMobile && currentPage + 1 <= numPages && (
              <>
                <span>-</span>
                <span>{currentPage + 1}</span>
              </>
            )}
            <span> of </span>
            <span>{numPages || '-'}</span>
          </div>
          
          <button 
            className="e-bulletin-btn" 
            onClick={goToNextPages}
            disabled={isTwoPageView && !isMobile
              ? currentPage >= numPages - 1 
              : currentPage >= numPages}
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
          
          <button className="e-bulletin-btn" onClick={goToLastPage} disabled={currentPage >= numPages}>
            <ChevronRight size={18} />
            <ChevronRight size={18} style={{ marginLeft: '-8px' }} />
          </button>
        </div>
        
        {/* Mobile Navigation - now with buttons instead of just input */}
        <div className="e-bulletin-mobile-nav">
          <button 
            className="e-bulletin-btn" 
            onClick={goToPreviousPages}
            disabled={currentPage <= 1}
          >
            <ChevronLeft size={20} />
          </button>
          
          <input 
            type="number" 
            min="1" 
            max={numPages || 1} 
            value={currentPage}
            onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
            className="e-bulletin-page-input"
          />
          <span>/ {numPages || '-'}</span>
          
          <button 
            className="e-bulletin-btn" 
            onClick={goToNextPages}
            disabled={currentPage >= numPages}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EBulletin;