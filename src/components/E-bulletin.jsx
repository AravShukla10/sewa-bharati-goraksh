import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './styles/E-bulletin.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const EBulletin = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(null);
  const [scale, setScale] = useState(1); // Zoom scale factor
  const containerRef = useRef(null);

  const pdfUrl = '/pp2.pdf';

  // Zoom levels
  const zoomLevels = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const minScale = 0.5;
  const maxScale = 2;
  const zoomStep = 0.25;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(null);
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
    setPdfError('Failed to load PDF. Please try again later.');
  }

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + zoomStep, maxScale));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - zoomStep, minScale));
  };

  const resetZoom = () => {
    setScale(1);
  };

  return (
    <div className="e-bulletin-container" ref={containerRef}>
      <h2>E-Bulletin</h2>

      {pdfError ? (
        <div className="pdf-error">
          {pdfError}
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <>
          <div className="controls">
            <div className="zoom-controls">
              <button onClick={zoomOut} disabled={scale <= minScale}>-</button>
              <span>{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn} disabled={scale >= maxScale}>+</button>
              <button onClick={resetZoom}>Reset</button>
            </div>
            <div className="page-info">
              Page {pageNumber} of {numPages || '--'}
            </div>
          </div>

          <div className="pdf-wrapper">
            <button
              className="arrow-button arrow-left"
              onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
              disabled={pageNumber <= 1}
            >
              &#8592;
            </button>

            <div className="pdf-viewer">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div className="pdf-loading">Loading PDF...</div>}
                error={<div className="pdf-error">Failed to load PDF document</div>}
              >
                <Page 
                  pageNumber={pageNumber}
                  width={containerRef.current ? containerRef.current.offsetWidth * scale : null}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>

            <button
              className="arrow-button arrow-right"
              onClick={() => setPageNumber(p => Math.min(p + 1, numPages || 1))}
              disabled={pageNumber >= (numPages || 1)}
            >
              &#8594;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EBulletin;