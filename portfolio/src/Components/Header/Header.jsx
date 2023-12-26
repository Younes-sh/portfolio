import React from 'react'
import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';

import Younes from '../../assets/Home/younes.png';
import bootstrap from '../../assets/Header/bootstrap.png';
import docker from '../../assets/Header/docker.png';
import git from '../../assets/Header/git.png';
import github from '../../assets/Header/github.png';
import Linux from '../../assets/Header/Linux.png';
import mongoDB from '../../assets/Header/mongoDB.png';
import nodejs from '../../assets/Header/Node.png';
import react from '../../assets/Header/React.png';
import tailwind from '../../assets/Header/tailwind.png';

import '../../assets/Fonts/fFinish.ttf';

// dependencie Animation
import { useTrail, animated } from '@react-spring/web';   

const DIV = styled.div`
width: 350px;
height: 450px;
  border-radius:  30% 70% 70% 30% / 34% 30% 70% 66%  ;

  background: #EC8106;

  @media screen and (max-width: 720px) {
    border-radius:  44% 44% 44% 44% / 44% 44% 44% 44%  ;
}
  
`

const IMG = styled.img`
    width: 90%;
    clip-path: polygon(49% 0, 100% 0, 100% 35%, 95% 66%, 90% 84%, 66% 100%, 37% 100%, 12% 90%, 0 48%, 0 0);
    @media screen and (max-width: 980px) {
        margin-top:50px;
    }
    @media screen and (max-width: 720px) {
        margin:40px;
    }
    @media screen and (max-width: 711px) {
        width: 320px;
    }
    @media screen and (max-width:375px) {
        margin:50px -40px;
    }
    @media screen and (max-width:331px) {
        margin:50px -60px;
    }
`

const Header = () => {
    const textItems = ['Y', 'O', 'U', 'N', 'E', 'S', ' ', 'S', 'H', 'E', 'I', 'K', 'H', 'L', 'A', 'R'];

    const trail = useTrail(textItems.length, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 200 }, // مدت زمان انیمیشن (میلی‌ثانیه)
        delay: index => 500 + index * 100, // تاخیر بر اساس ایندکس (میلی‌ثانیه)
      });
  return (
   <div  className='w-100 h-100 lg-mt-5 pt-lg-5 '>
    <Row className='container   m-auto '>
        <Col lg={6} className='text-align-center pt-lg-5 mt-lg-5'>
            <h1 className='text-light text-start Capsmall'>
              {
                trail.map((animation, index) => (
                    <animated.span key={index} style={{ ...animation, display: 'inline-block', marginRight: '5px' }}>
                      {textItems[index]}
                    </animated.span>
                  ))
              }
            </h1>

            <p className='text-light text-start h3 mt-5'>I am a Web designer, Full stack developer</p>
            <div className='text-start d-flex flex-wrap mt-5'>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >Node.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >MongoDB</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >React.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >React-native</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >Tailwind</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >Express.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >MUI</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >UI/UX</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >SASS</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >Bootstrap</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >Photoshop</span>
                <span className='px-3 text-light' style={{backgroundColor:'#EC8106', margin:'5px',borderRadius:'5px'}} >Adobe illustrator</span>
            </div>
        </Col>
        <Col lg={6} className='text-start pt-3 '>
            <DIV className='w-100'>
                <IMG  src={Younes} alt="younes" />
            </DIV>
        </Col>
    </Row>
    
   </div>
  )
}

export default Header