import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Use this worker path instead
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const EBulletin = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(null);

  const pdfUrl = '/pp2.pdf'; // Make sure this file exists in your public folder

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(null);
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
    setPdfError('Failed to load PDF. Please try again later.');
  }

  return (
    <div className="e-bulletin-container">
      <h2>E-Bulletin</h2>
      
      {pdfError ? (
        <div className="pdf-error">
          {pdfError}
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <>
          <div className="pdf-viewer">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="pdf-loading">
                  Loading PDF...
                </div>
              }
              error={
                <div className="pdf-error">
                  Failed to load PDF document
                </div>
              }
            >
              <Page 
                pageNumber={pageNumber}
                width={800} // You can adjust this or use scale prop
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>

          <div className="pdf-controls">
            <button 
              onClick={() => setPageNumber(p => Math.max(p - 1, 1))} 
              disabled={pageNumber <= 1}
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages || '--'}
            </span>
            <button 
              onClick={() => setPageNumber(p => Math.min(p + 1, numPages || 1))} 
              disabled={pageNumber >= (numPages || 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EBulletin;