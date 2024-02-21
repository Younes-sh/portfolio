import { useState } from 'react';
import './main.css';
import ModalShow from '../../../Components/Modal/Modal';

import Cloud from '../../../assets/Home/Main/cloud.png';
import Cloud2 from '../../../assets/Home/Main/cloud2.png';
import Cloud3 from '../../../assets/Home/Main/cloud3.png';
import Cloud4 from '../../../assets/Home/Main/cloud4.png';

import Mobile from '../../../assets/Home/Main/mobile.png';
import Mobile2 from '../../../assets/Home/Main/mobile2.png';
import Mobile3 from '../../../assets/Home/Main/mobile3.png';
import Mobile4 from '../../../assets/Home/Main/mobile4.png';

import Security from '../../../assets/Home/Main/Security.png';
import Security2 from '../../../assets/Home/Main/Security2.png';
import Security3 from '../../../assets/Home/Main/Security3.png';
import Security4 from '../../../assets/Home/Main/Security4.png';

// const BackGroundItem = 'https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

import { Row, Col } from 'react-bootstrap';
import Styled from 'styled-components';

const Card = Styled.div`
  width: 300px;
  height: 260px;
  margin: 10px auto;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: rgb(11,24,37);
  p {
    padding: 0 7px;
  }
`
const BackGround = Styled.div`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-video: url(https://streamable.com/qvbffu);
background-image: url(https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
-webkit-background-clip: text;
 background-clip: text;
 color: transparent;
 mix-blend-mode: normal;
 mix-blend-mode: normal;
  animation: BackgroundAnimation 2s linear infinite;

  @keyframes BackgroundAnimation {
    0% { mix-blend-mode: normal;  filter: hue-rotate(0deg); }
    50% { mix-blend-mode: difference; filter: hue-rotate(180deg); }
    100% { mix-blend-mode: normal; filter: hue-rotate(0deg); }
  }
`
const TextAnimation = Styled.p`
  font-size: 5em;
  font-weight: bold;
  
`
const MainTwo = () => {
  const [ isShowModal, isSetShowModal ] = useState(false);

  return (
    <div style={{position:'relative'}} className='MainTwo'>
       
     <div className='w-100 d-flex flex-column justify-content-center  '>
      
      <Row className='container m-auto mt-4  '>
        <Col lg={4}>
          <Card>
            <div className='w-100'>
              <div style={{position:'relative'}} className='w-50'>
                <img style={{width: '90%', position:'absolute'}} src={Cloud} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Cloud2} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Cloud3} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Cloud4} alt="" />
              </div>
            </div>
            <div className='w-100'>
              <p className='text-light'>AWS</p>
            </div>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <div className='w-100'>
              <div style={{position:'relative'}} className='w-50'>
                <img style={{width: '90%', position:'absolute'}} src={Mobile} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Mobile2} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Mobile3} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Mobile4} alt="" />
              </div>
            </div>
            <div className='w-100'>
              <p className='text-light'>Web & Phone</p>
            </div>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
          <div className='w-100'>
              <div style={{position:'relative'}} className='w-50'>
                <img style={{width: '90%', position:'absolute'}} src={Security} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Security2} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Security3} alt="" />
                <img className='Animation' style={{width: '90%', position:'absolute'}} src={Security4} alt="" />
              </div>
            </div>
            <div className='w-100'>
              <p className='text-light'>HTTPS - XSS</p>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className='container m-auto  mt-4'>
        <Col lg={4}>
          <div className='text-light px-5 text-start '>
            <h3 className='px-1'>Cybersecurity:</h3>
            <p style={{textAlign:'justify'}} className='px-1 text-justify'>Utilizing Cloud Storage, HTTPS, and XSS Prevention
In the realm of digital security, ensuring the safety of web content is paramount. By integrating cloud storage, implementing HTTPS protocols, and thwarting XSS attacks, websites can fortify their defenses against potential threats, safeguarding both data and user experiences. Let's delve into how these measures contribute to a more resilient online presence.</p>
          <p 
            onClick={() => isSetShowModal(true)}
          className='btn border text-start text-warning px-5'>More</p>
          </div>
          {isShowModal && (
            <ModalShow closeHandler={() => isSetShowModal(false)} >
              
             

            </ModalShow>
          )}
        </Col>
        <Col lg={8}>
          <BackGround className=''>
            <TextAnimation>Cybersecurity</TextAnimation>
            <TextAnimation>Enhancemen</TextAnimation>
          </BackGround>
        </Col>
      </Row>
       
     </div>
    
    </div>
  )
}

export default MainTwo