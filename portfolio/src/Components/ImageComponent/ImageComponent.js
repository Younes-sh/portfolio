import {useState} from 'react';
import './style.css';
import styled from 'styled-components';
import PdfComponent from './PdfComponent'

const ImageComponent = ({Title,Image,Alt}) => {
  const [isLarge , setIsLarge] = useState()

  //  Photo Zoom operation
  const LargeImage = () => {
    setIsLarge(true)
  }
  // Photo unzoom operation
  const CloseImage = () => {
    setIsLarge(false)
  }

  // download image operation
  const downloadImage = () => {
    const imageUrl = Image
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg'; // Set the desired filename
    a.click();
  };

  const Container = styled.div`
    width:100%;
    height:auto;
  `
  const ShowImage = styled.div`
    width:80%;
    margin-top:-400px;
    padding:30px;
    position:absolute;
    z-index:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    right:200px;

    @media screen and (max-width:1419px) {
      left:10%;
    }
  `
  const Button = styled.button`
    backgroundColor:none;
    border:none;
  `

  return (
    <Container >
        <p>Click on {Title}</p>
      <div className=''>
        <button onClick={LargeImage} >
          <img style={{width:'200px'}} src={Image} alt={Alt} />
        </button>
      <hr  />
      </div>

      {
        isLarge && (
          <ShowImage className='morphism-gray d-flex justify-content-start '>
            <div className='d-flex flex-wrap justify-content-center '>
              <Button className='m-2 px-4 btn btn-danger'  onClick={CloseImage}>&#128473;Close</Button>
              <button className='m-2 btn btn-success' onClick={downloadImage} >png</button>
              <PdfComponent />
            </div>
              <img style={{width:'90%',margin:'auto'}} src={Image}  alt={Alt}/>
          </ShowImage>
        )
      }
    </Container>
  )
}

export default ImageComponent