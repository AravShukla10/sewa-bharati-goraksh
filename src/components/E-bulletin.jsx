import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  ChevronLeft,
  ChevronRight,
  File,
  Menu,
  X,
  BookOpen,
  FileText,
  Folder,
  ArrowLeft,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize,
  Minimize
} from 'lucide-react';
import './styles/E-bulletin.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const EBulletin = ({ activeScreen, languageType = 'en' }) => {
  // Translation dictionaries
  const translations = {
    en: {
      close: 'Close',
      editions: 'Editions',
      previousPDF: 'Previous PDF',
      nextPDF: 'Next PDF',
      pdfViewer: 'PDF Viewer',
      singlePageView: 'Single page view',
      doublePageView: 'Double page view',
      zoomOut: 'Zoom out',
      resetZoom: 'Reset zoom',
      zoomIn: 'Zoom in',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      loadingPDF: 'Loading PDF...',
      noPDFs: 'No PDFs available.',
      prev: 'Prev',
      next: 'Next'
    },
    hi: {
      close: 'बंद करें',
      editions: 'अंक',
      previousPDF: 'पिछला PDF',
      nextPDF: 'अगला PDF',
      pdfViewer: 'PDF दर्शक',
      singlePageView: 'एक पृष्ठ दृश्य',
      doublePageView: 'दो पृष्ठ दृश्य',
      zoomOut: 'ज़ूम कम करें',
      resetZoom: 'ज़ूम रीसेट',
      zoomIn: 'ज़ूम बढ़ाएं',
      enterFullscreen: 'पूर्ण स्क्रीन में प्रवेश करें',
      exitFullscreen: 'पूर्ण स्क्रीन से बाहर निकलें',
      loadingPDF: 'पीडीएफ़ लोड हो रहा है...',
      noPDFs: 'कोई PDF उपलब्ध नहीं है।',
      prev: 'पिछला',
      next: 'अगला'
    }
  };

  const t = (key) => translations[languageType]?.[key] || key;

  // PDF list with public directory paths
  //can add more pdfs from here by making objects for it below -------------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  const pdfList = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/pp1.pdf',
      title: {
        en: 'Seva Jagriti November 2024 Edition',
        hi: 'सेवा जागृति नवंबर 2024 अंक'
      }
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + '/pp2.pdf',
      title: {
        en: 'Seva Jagriti March 2025 Edition',
        hi: 'सेवा जागृति मार्च 2025 अंक'
      }
    }
  ];

  const getTitle = (pdf) => {
    if (typeof pdf.title === 'object') {
      return pdf.title[languageType] || pdf.title.en;
    }
    return pdf.title || '';
  };

  // State management
  const [pdfs] = useState(pdfList);
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(0.8);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTwoPageView, setIsTwoPageView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Mobile detection
  useEffect(() => {
    const updateMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setIsTwoPageView(false);
    };
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  // Fullscreen handling
  useEffect(() => {
    setScale(isFullScreen ? 1 : 0.8);
  }, [isFullScreen]);

  useEffect(() => window.scrollTo(0, 0), [activeScreen]);

  const toggleFullScreen = () => {
    const container = document.querySelector('.e-bulletin-pdf-container');
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const handler = () => setIsFullScreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // PDF handling
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setLoading(false);
  };

  // Navigation
  const step = isTwoPageView && !isMobile ? 2 : 1;
  const goToPreviousPages = () => setCurrentPage((p) => Math.max(p - step, 1));
  const goToNextPages = () => setCurrentPage((p) => Math.min(p + step, numPages));
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(numPages);
  const goToPage = (n) => n >= 1 && n <= numPages && setCurrentPage(n);

  const selectPdf = (i) => {
    setCurrentPdfIndex(i);
    setCurrentPage(1);
    setLoading(true);
    if (isMobile) setSidebarOpen(false);
  };

  const goToPreviousPdf = () => currentPdfIndex > 0 && selectPdf(currentPdfIndex - 1);
  const goToNextPdf = () => currentPdfIndex < pdfs.length - 1 && selectPdf(currentPdfIndex + 1);

  const toggleViewMode = () => {
    if (isMobile) return;
    setIsTwoPageView((v) => !v);
    if (!isTwoPageView && currentPage % 2 === 0) setCurrentPage(currentPage - 1);
  };

  const currentPdfUrl = pdfs[currentPdfIndex]?.url;
  const currentPdfTitle = getTitle(pdfs[currentPdfIndex] || {});

  // Page rendering
  const renderPages = () => {
    const pages = [];
    const startPage = currentPage;
    const endPage = isTwoPageView && !isMobile ? Math.min(currentPage + 1, numPages) : currentPage;

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <div key={`page-${i}`} className="e-bulletin-page">
          <Page
            pageNumber={i}
            scale={scale}
            width={isMobile ? window.innerWidth - 40 : null}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>
      );
    }
    return pages;
  };

  return (
    <div className="e-bulletin-container">
      {/* Mobile toggle */}
      <button className="e-bulletin-mobile-toggle" onClick={() => setSidebarOpen((o) => !o)}>
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        <span>{sidebarOpen ? t('close') : t('editions')}</span>
      </button>

      {/* Sidebar */}
      <div className={`e-bulletin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="e-bulletin-sidebar-header">
          <Folder size={20} />
          <h3>{t('editions')}</h3>
        </div>
        <div className="e-bulletin-sidebar-content">
          {pdfs.map((pdf, idx) => (
            <div
              key={pdf.id}
              className={`e-bulletin-edition ${idx === currentPdfIndex ? 'active' : ''}`}
              onClick={() => selectPdf(idx)}
            >
              <File size={16} />
              <div className="e-bulletin-edition-info">
                <span className="e-bulletin-edition-title">{getTitle(pdf)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="e-bulletin-sidebar-footer">
          <button
            className="e-bulletin-btn"
            onClick={goToPreviousPdf}
            disabled={currentPdfIndex <= 0}
          >
            <ArrowLeft size={16} />
            <span>{t('previousPDF')}</span>
          </button>
          <button
            className="e-bulletin-btn"
            onClick={goToNextPdf}
            disabled={currentPdfIndex >= pdfs.length - 1}
          >
            <span>{t('nextPDF')}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className={`e-bulletin-content ${isFullScreen ? 'fullscreen' : ''}`}>
        {/* Toolbar */}
        <div className="e-bulletin-toolbar">
          <div className="e-bulletin-current-pdf">
            <span>{currentPdfTitle || t('pdfViewer')}</span>
          </div>
          <div className="e-bulletin-controls">
            {!isMobile && (
              <button
                className="e-bulletin-btn"
                onClick={toggleViewMode}
                title={isTwoPageView ? t('singlePageView') : t('doublePageView')}
              >
                {isTwoPageView ? <FileText size={20} /> : <BookOpen size={20} />}
              </button>
            )}
            <div className="e-bulletin-zoom">
              <button
                className="e-bulletin-btn"
                onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}
                title={t('zoomOut')}
              >
                <ZoomOut size={18} />
              </button>
              <button
                className="e-bulletin-btn"
                onClick={() => setScale(0.8)}
                title={t('resetZoom')}
              >
                <RotateCw size={18} />
                <span>{Math.round(scale * 100)}%</span>
              </button>
              <button
                className="e-bulletin-btn"
                onClick={() => setScale((s) => Math.min(s + 0.2, 2.5))}
                title={t('zoomIn')}
              >
                <ZoomIn size={18} />
              </button>
            </div>
            <button
              className="e-bulletin-btn e-bulletin-fullscreen-btn"
              onClick={toggleFullScreen}
              title={isFullScreen ? t('exitFullscreen') : t('enterFullscreen')}
            >
              {isFullScreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>

        {/* PDF Document */}
        <div className="e-bulletin-pdf-container">
          {currentPdfUrl ? (
            <Document
              file={currentPdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="e-bulletin-loading">{t('loadingPDF')}</div>}
              className="e-bulletin-document"
              onLoadError={console.error}
            >
              <div className={`e-bulletin-pages ${isTwoPageView && !isMobile ? 'two-page-view' : 'one-page-view'}`}>
                {renderPages()}
              </div>
            </Document>
          ) : !loading ? (
            <div className="e-bulletin-no-pdf">
              <p>{t('noPDFs')}</p>
            </div>
          ) : null}

          {/* Fullscreen navigation */}
          {isFullScreen && (
            <>
              <div className="e-bulletin-fullscreen-nav">
                <button className="e-bulletin-btn" onClick={goToPreviousPages} disabled={currentPage <= 1}>
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
                <button className="e-bulletin-btn" onClick={goToNextPages} disabled={currentPage >= numPages}>
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="e-bulletin-zoom fullscreen-zoom">
                <button
                  className="e-bulletin-btn"
                  onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}
                  title={t('zoomOut')}
                >
                  <ZoomOut size={18} />
                </button>
                <button className="e-bulletin-btn" onClick={() => setScale(0.8)} title={t('resetZoom')}>
                  <RotateCw size={18} />
                  <span>{Math.round(scale * 100)}%</span>
                </button>
                <button
                  className="e-bulletin-btn"
                  onClick={() => setScale((s) => Math.min(s + 0.2, 2.5))}
                  title={t('zoomIn')}
                >
                  <ZoomIn size={18} />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Bottom navigation */}
        <div className="e-bulletin-bottom-nav">
          <button className="e-bulletin-btn" onClick={goToFirstPage} disabled={currentPage <= 1}>
            <ChevronLeft size={18} />
            <ChevronLeft size={18} style={{ marginLeft: '-8px' }} />
          </button>
          <button className="e-bulletin-btn" onClick={goToPreviousPages} disabled={currentPage <= 1}>
            <ChevronLeft size={20} />
            <span>{t('prev')}</span>
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
            disabled={currentPage >= numPages - (isTwoPageView && !isMobile ? 1 : 0)}
          >
            <span>{t('next')}</span>
            <ChevronRight size={20} />
          </button>
          <button className="e-bulletin-btn" onClick={goToLastPage} disabled={currentPage >= numPages}>
            <ChevronRight size={18} />
            <ChevronRight size={18} style={{ marginLeft: '-8px' }} />
          </button>
        </div>

        {/* Mobile navigation */}
        <div className="e-bulletin-mobile-nav">
          <button className="e-bulletin-btn" onClick={goToPreviousPages} disabled={currentPage <= 1}>
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
          <button className="e-bulletin-btn" onClick={goToNextPages} disabled={currentPage >= numPages}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EBulletin;