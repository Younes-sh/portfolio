import {useState, useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
const ImageOne = 'https://i.pinimg.com/564x/d6/f5/af/d6f5afacf625ea70d6a51030399a8278.jpg';
const Title1 = 'Flat Design';
const Description1 = 'Flat design emphasizes simplicity, vibrant colors, cleanliness, and lack of shadows. This design style makes websites look neat, simple, and user-friendly.'

const ImageTow = 'https://i.pinimg.com/564x/27/a6/8c/27a68c693a63be857bab7b750a2ef78d.jpg';
const Title2 = 'Minimalist Design';
const Description2 = 'This style focuses on removing unnecessary elements and prioritizing content. Minimalist design employs simple colors, clean fonts, and white space.'

const ImageThree = 'https://i.pinimg.com/564x/ec/ff/72/ecff72264c307f9f97a10f22b1cea91f.jpg';
const Title3 = 'Illustrative Design';
const Description3 = 'This style involves using images, illustrations, or animations as primary design elements. It gives websites an engaging and unique appearance.'

const ImageFour = 'https://i.pinimg.com/564x/f5/63/30/f56330291f417b8db13b0fb394df9de8.jpg';
const Title4 = 'Typography-Centric Design';
const Description4 = 'This style emphasizes fonts, sizes, and text colors to make the website attractive and readable. Typography-centric design can make a website look elegant and stylish.'


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
  background-size: cover;
  background-position: center;
`
const Paragraph = styled.p`
  padding: 0 20px;
  color: #fff;
  text-align: center;
  border-radius: 0 0 55px 55px;
  text-shadow: 0 0 4px black;
`
const ContainerText = styled.div`
  width: 100%;
  position: absolute;
  padding-top: 0px;
  height:0;
  bottom: 0;
  background: rgb(16,38,38,.5);
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
  position: relative;
  z-index: 3;
  :hover {
    background-color: #666666;
  }
`

const ChangeItem = () => {
  // Visibility for H4  and Paragraph 
  const [visible, setVisible] = useState('hidden');
// change the visibility of ContainerText
  const [ changeHeight, setChangeHeight] = useState(0);
// useState for change images
const [ changeImage, setChangeImage] = useState(ImageOne);
// set text for image change
const [ changeDescription, setChangeDescription] = useState(Description1);
// Title change 
const [ changeTitle, setChangeTitle] = useState(Title1)
// Default image
const [defaultImage, setDefaultImage] = useState('');



  const hoverHandlerIn =() => {
    setVisible('visible'); //
    setChangeHeight('360px')
    
  }
  const hoverHandlerOut = () => {
    // setVisible('hidden'); 
    setChangeHeight('0')
  }
  //   buttons cahnge images

  const OnechangeImage = () => {
    setChangeImage(ImageOne);
    setChangeDescription(Description1)
    setChangeTitle(Title1)
  }

  const TowchangeImage = () => {
    setChangeImage(ImageTow);
    setChangeDescription(Description2)
    setChangeTitle(Title2)
  }

  const ThreechangeImage = () => {
    setChangeImage(ImageThree);
    setChangeDescription(Description3)
    setChangeTitle(Title3)
  }

  const FourchangeImage = () => {
    setChangeImage(ImageFour);
    setChangeDescription(Description4)
    setChangeTitle(Title4)
  }
  // Change background-color the change images


  return (
    <Container>
        <Row className='text-light container'>
            <Col lg={6}>
                <DivButton
                  style={{backgroundImage:`url(${changeImage})`}}
                  onMouseOver={hoverHandlerIn}
                  onMouseOut={hoverHandlerOut}
                >
                  <ContainerText  style={{height:`${changeHeight}`}} className={`Hover`}>
                    <h4 style={{color:'#EC8106',paddingTop:'95px', visibility:`${visible}`}}>{changeTitle}</h4>
                    <Paragraph style={{visibility:`${visible}`}} >{changeDescription}</Paragraph>
                  </ContainerText>
                </DivButton>
            </Col>
            <Col lg={6}>
              {/*          1           */}
              <ContainerButtonsChangeImage>
                <ButtonChangeImage
                onClick={OnechangeImage}
              >
                <h3 style={{color:'#fff'}}>{Title1}</h3>
                </ButtonChangeImage>


              {/*          2           */}
                <ButtonChangeImage
                onClick={() => TowchangeImage()}
              >
                <h3 style={{color:'#fff'}}>{Title2}</h3>
                </ButtonChangeImage>


                {/*         3            */}
                <ButtonChangeImage
                onClick={ThreechangeImage}
              >
                <h3 style={{color:'#fff'}}>{Title3}</h3>
                </ButtonChangeImage>


                {/*         4            */}
                
                <ButtonChangeImage
                onClick={FourchangeImage}
              >
                <h3 style={{color:'#fff'}}>{Title4}</h3>
                </ButtonChangeImage>
              </ContainerButtonsChangeImage>
            </Col>
        </Row>
    </Container>
  )
}

export default ChangeItem