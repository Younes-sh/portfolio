import {useState} from 'react';
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
  display: flex;
  justify-content: center;
  align-items: center;
  background:#EC8106;
  z-index: 3;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 100px 0;
  }

`
// DivButton is a button for hover animation text on the image
const DivButton = styled.button`
  width: 300px;
  height: 600px;
  // padding-top: 250px;
  border-radius: 200px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
`
const Paragraph = styled.p`
  height: auto;
  padding: 0 20px 5px;
  color: #fff;
  text-align: center;
  border-radius: 0 0 55px 55px;
  text-shadow: 0 0 4px black;
  overflow:auto;
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
  border-radius: 100% 0% 0% 25% / 56% 0% 25% 50%;
`
// ButtonChangeImage
const ButtonChangeImage = styled.button`
  margin-top: 10px;
  border:none;
  padding: 10px;
  background-color: #EC8106;
  border: solid 1px rgba(255, 255, 255, 0.6);
  text-align:left;
  border-radius: 20px;
  transition: 0.5s linear all;
  color: #000;
  
  &:hover {
    background-color: #3A3535;
    color: #ccc;
  }
`
const ContainerButtonsChangeImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  
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
// 
const [ marginLeftAnimationButton, setMarginLeftAnimationButton ] = useState('-70px');
const [ paddingAnimationButton, setPaddingAnimationButton ] = useState('82px');
const [ backdropAnimationButton, setBackdropAnimationButton ] = useState('#232020');
const [ textColorAnimationButton, setTextColorAnimationButton ] = useState('#ffffff');

// State Button 2
const [ marginLeftAnimationButton2, setMarginLeftAnimationButton2 ] = useState('');
const [ paddingAnimationButton2, setPaddingAnimationButton2 ] = useState('');
const [ backdropAnimationButton2, setBackdropAnimationButton2 ] = useState('');
const [ textColorAnimationButton2, setTextColorAnimationButton2 ] = useState('');

// State Button 3
const [ marginLeftAnimationButton3, setMarginLeftAnimationButton3 ] = useState('');
const [ paddingAnimationButton3, setPaddingAnimationButton3 ] = useState('');
const [ backdropAnimationButton3, setBackdropAnimationButton3 ] = useState('');
const [ textColorAnimationButton3, setTextColorAnimationButton3 ] = useState('');

// State Button 3
// Button 3
const [ marginLeftAnimationButton4, setMarginLeftAnimationButton4 ] = useState('');
const [ paddingAnimationButton4, setPaddingAnimationButton4 ] = useState('');
const [ backdropAnimationButton4, setBackdropAnimationButton4 ] = useState('');
const [ textColorAnimationButton4, setTextColorAnimationButton4 ] = useState('');


  const hoverHandlerIn =() => {
    setVisible('visible'); //
    setChangeHeight('360px')
  }
  const hoverHandlerOut = () => {
    // setVisible('hidden'); 
    setChangeHeight('0')
  }
  //   buttons cahnge images

  // Button 1
  const OnechangeImage = () => {
    setChangeImage(ImageOne);
    setChangeDescription(Description1)
    setChangeTitle(Title1);
    setMarginLeftAnimationButton('-70px');
    setPaddingAnimationButton('82px');
    setBackdropAnimationButton('#232020');
    setTextColorAnimationButton('#ffffff');

    // state button 2
    setMarginLeftAnimationButton2('');
    setPaddingAnimationButton2('');
    setBackdropAnimationButton2('');
    setTextColorAnimationButton2('');
    // state button 3
    setMarginLeftAnimationButton3('');
    setPaddingAnimationButton3('');
    setBackdropAnimationButton3('');
    setTextColorAnimationButton3('');
    // state button 4
    setMarginLeftAnimationButton4('');
    setPaddingAnimationButton4('');
    setBackdropAnimationButton4('');
    setTextColorAnimationButton4('');
  }

  // button 2
  const TowchangeImage = () => {
    setChangeImage(ImageTow);
    setChangeDescription(Description2)
    setChangeTitle(Title2)
    setMarginLeftAnimationButton2('-70px');
    setPaddingAnimationButton2('82px');
    setBackdropAnimationButton2('#232020');
    setTextColorAnimationButton2('#ffffff');
    // state button 1
    setMarginLeftAnimationButton('');
    setPaddingAnimationButton('');
    setBackdropAnimationButton('');
    setTextColorAnimationButton('');
    // state button 3
    setMarginLeftAnimationButton3('');
    setPaddingAnimationButton3('');
    setBackdropAnimationButton3('');
    setTextColorAnimationButton3('');
    // state button 4
    setMarginLeftAnimationButton4('');
    setPaddingAnimationButton4('');
    setBackdropAnimationButton4('');
    setTextColorAnimationButton4('');
  }

  // Button 3
  const ThreechangeImage = () => {
    setChangeImage(ImageThree);
    setChangeDescription(Description3)
    setChangeTitle(Title3)
    setMarginLeftAnimationButton3('-70px');
    setPaddingAnimationButton3('82px');
    setBackdropAnimationButton3('#232020');
    setTextColorAnimationButton3('#ffffff');
    // state button 1
    setMarginLeftAnimationButton('');
    setPaddingAnimationButton('');
    setBackdropAnimationButton('');
    setTextColorAnimationButton('');
    // state button 2
    setMarginLeftAnimationButton2('');
    setPaddingAnimationButton2('');
    setBackdropAnimationButton2('');
    setTextColorAnimationButton2('');
    // state button 4
    setMarginLeftAnimationButton4('');
    setPaddingAnimationButton4('');
    setBackdropAnimationButton4('');
    setTextColorAnimationButton4('');
  }

  const FourchangeImage = () => {
    setChangeImage(ImageFour);
    setChangeDescription(Description4)
    setChangeTitle(Title4)
    setMarginLeftAnimationButton4('-70px');
    setPaddingAnimationButton4('82px');
    setBackdropAnimationButton4('#232020');
    setTextColorAnimationButton4('#ffffff');
    // state button 1
    setMarginLeftAnimationButton('');
    setPaddingAnimationButton('');
    setBackdropAnimationButton('');
    setTextColorAnimationButton('');
    // state button 2
    setMarginLeftAnimationButton2('');
    setPaddingAnimationButton2('');
    setBackdropAnimationButton2('');
    setTextColorAnimationButton2('');
    // state button 3
    setMarginLeftAnimationButton3('');
    setPaddingAnimationButton3('');
    setBackdropAnimationButton3('');
    setTextColorAnimationButton3('');
    
  }
  // Change background-color the change images


  return (
    <Container>
        <Row className='text-light container '>
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
                style={{ marginLeft:`${marginLeftAnimationButton}`, paddingLeft:`${paddingAnimationButton}`, backgroundColor:`${backdropAnimationButton}`, color:`${textColorAnimationButton}`}}
              >
                <h3>{Title1}</h3>
                </ButtonChangeImage>


              {/*          2           */}
                <ButtonChangeImage
                onClick={() => TowchangeImage()}
                style={{ marginLeft:`${marginLeftAnimationButton2}`, paddingLeft:`${paddingAnimationButton2}`, backgroundColor:`${backdropAnimationButton2}`, color:`${textColorAnimationButton2}`}}
              >
                <h3>{Title2}</h3>
                </ButtonChangeImage>


                {/*         3            */}
                <ButtonChangeImage
                onClick={ThreechangeImage}
                style={{ marginLeft:`${marginLeftAnimationButton3}`, paddingLeft:`${paddingAnimationButton3}`, backgroundColor:`${backdropAnimationButton3}`, color:`${textColorAnimationButton3}`}}
              >
                <h3>{Title3}</h3>
                </ButtonChangeImage>


                {/*         4            */}
                
                <ButtonChangeImage
                onClick={FourchangeImage}
                style={{ marginLeft:`${marginLeftAnimationButton4}`, paddingLeft:`${paddingAnimationButton4}`, backgroundColor:`${backdropAnimationButton4}`, color:`${textColorAnimationButton4}`}}
              >
                <h3>{Title4}</h3>
                </ButtonChangeImage>
              </ContainerButtonsChangeImage>
            </Col>
        </Row>
    </Container>
  )
}

export default ChangeItem