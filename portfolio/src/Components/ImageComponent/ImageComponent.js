import {useState , useEffect} from 'react';
import './style.css';
import styled from 'styled-components';

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
    margin-top:-300px;
    position:absolute;
    z-index:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    left:200px;
  `
  const Button = styled.button`
    backgroundColor:none;
    border:none;
  `

  return (
    <Container >
      <div className=''>
        <p>{Title}</p>
        <button onClick={LargeImage} >
          <img style={{width:'200px'}} src={Image} alt={Alt} />
        </button>
      <hr  />
      </div>

      {
        isLarge && (
          <ShowImage className='morphism-gray'>
            <div>
              <Button className='mx-2 btn btn-danger'  onClick={CloseImage}>&#128473;Close</Button>
              <button onClick={downloadImage} className='mx-2 btn btn-success'>Download</button>
            </div>
              <img style={{width:'60%',margin:'auto'}}  src={Image} alt={Alt}/>
          </ShowImage>
        )
      }
    </Container>
  )
}

export default ImageComponent