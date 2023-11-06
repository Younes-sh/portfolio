
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
    <div>
      <button onClick={downloadPDF}>PDF</button>
    </div>
  )
}

export default PdfComponent