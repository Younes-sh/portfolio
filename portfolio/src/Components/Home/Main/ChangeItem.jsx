import {useState, useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
const Technology = 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const ImageTow = 'https://images.pexels.com/photos/18069859/pexels-photo-18069859/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-explores-how-humans-can-creatively-collaborate-with-artificial-general-intelligence-agi-in-the-future-and-how-it-can.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


const Container = styled.div`
  height: 100vh;
  padding: 70px ;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#EC8106;
`
// DivButton is a button for hover animation text on the image
const DivButton = styled.button`
  width: 300px;
  height: 600px;
  padding-top: 250px;
  border-radius: 200px;
  overflow: hidden;
  position: relative;
  background-image: url(${Technology});
`

const Paragraph = styled.p`
  padding:10px 20px;
  color: #fff;
  text-align: justify;
  border-radius: 0 0 55px 55px;
  text-shadow: 0 0 4px black;
`
const ContainerText = styled.div`
  width: 100%;
  position: absolute;
  padding-top: 0px;
  height:0;
  bottom: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100% 0% 0% 25% / 56% 0% 25% 0%;
`
// ButtonChangeImage
const ButtonChangeImage = styled.button`
  margin-top: 10px;
  border:none;
  padding: 10px;
  background-color: transparent;
  text-align:left;
  border: solid 1px #ccc;
  border-radius: 20px;

  
`
const ContainerButtonsChangeImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    background-color: #102626;
  }
`


const ChangeItem = () => {
  // Visibility for H4  and Paragraph 
  const [visible, setVisible] = useState('hidden');
// change the visibility of ContainerText
  const [ changeHeight, setChangeHeight] = useState(0);
// useState for change images
const [ changeImage, setChangeImage] = useState(Technology);


  const hoverHandlerIn =() => {
    setVisible('visible'); //
    setChangeHeight('360px')
  }
  const hoverHandlerOut = () => {
    setVisible('hidden'); //
    setChangeHeight('0')
  }
  //   buttons cahnge images

  const OnechangeImage = () => {
    setChangeImage(Technology)    
  }

  const TowchangeImage = () => {
    setChangeImage(ImageTow)      
  }

  const ThreechangeImage = () => {
    setChangeImage()      
  }

  const FourchangeImage = () => {
    setChangeImage()      
  }
  return (
    <Container>
        <Row className='text-light container'>
            <Col lg={6}>
                <DivButton
                  style={{backgroundImage:`${changeImage}`}}
                  onMouseOver={hoverHandlerIn}
                  onMouseOut={hoverHandlerOut}
                >
                  <ContainerText  style={{height:`${changeHeight}`}} className={`Hover`}>
                    <h4 style={{color:'#EC8106',paddingTop:'95px', visibility:`${visible}`}}>Technology</h4>
                    <Paragraph style={{visibility:`${visible}`}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores nihil blanditiis vitae cumque animi aspernatur velit fugit doloribus dolor veritatis tenetur!</Paragraph>
                  </ContainerText>
                </DivButton>
            </Col>
            <Col lg={6}>
              <ContainerButtonsChangeImage>
                <ButtonChangeImage
                onClick={OnechangeImage}
              >
                <h3 style={{color:'#fff'}}>test</h3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic magni unde ex amet quod a voluptate est consequuntur necessitatibus </Paragraph>
                </ButtonChangeImage>

                <ButtonChangeImage
                onClick={() => TowchangeImage()}
              >
                <h3 style={{color:'#fff'}}>test</h3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic magni unde ex amet quod a voluptate est consequuntur necessitatibus </Paragraph>
                </ButtonChangeImage>

                <ButtonChangeImage
                onClick={ThreechangeImage}
              >
                <h3 style={{color:'#fff'}}>test</h3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic magni unde ex amet quod a voluptate est consequuntur necessitatibus </Paragraph>
                </ButtonChangeImage>

                <ButtonChangeImage
                onClick={FourchangeImage}
              >
                <h3 style={{color:'#fff'}}>test</h3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic magni unde ex amet quod a voluptate est consequuntur necessitatibus </Paragraph>
                </ButtonChangeImage>
              </ContainerButtonsChangeImage>
            </Col>
        </Row>
    </Container>
  )
}

export default ChangeItem