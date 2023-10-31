
const PdfComponent = ({PDF}) => {
  // download image operation
  const downloadPDF = () => {
    const a = document.createElement('a');
    a.href = PDF;
    a.download = 'CV-Sheikhlar.pdf'; // نام فایل PDF دلخواه
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
    <div >
        <a className='m-2 btn btn-success'  href={PDF} target="_blank">Download PDF</a>
        <button onClick={downloadPDF}>Download PDF</button>
    </div>
  )
}

export default PdfComponent