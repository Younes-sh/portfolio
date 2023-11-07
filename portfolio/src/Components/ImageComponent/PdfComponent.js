
import PDF from '../../assets/About/YOUNESSHEIKHLAR.pdf'

function PDFDownloadButton() {
 

  return (
    // <button className='m-2 btn btn-success' onClick={handleDownload}>
    //    PDF
    // </button>
    <>
      <a className='m-2 btn btn-success' href={PDF}>PDF</a>
    </>
  );
}

export default PDFDownloadButton;
