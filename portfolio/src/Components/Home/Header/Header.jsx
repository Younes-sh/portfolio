import {useState} from 'react';
import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';
import './style.css';


import Younes from '../../../assets/Home/younes.png';
import Crystal from '../../../assets/Home/png.png';
import goldYounes from '../../../assets/Home/goldYounes.png';
import ManGranit from '../../../assets/Home/ManGranit.png';
import bootstrap from '../../../assets/Header/bootstrap.png';
import docker from '../../../assets/Header/docker.png';
import git from '../../../assets/Header/git.png';
import github from '../../../assets/Header/github.png';
import Linux from '../../../assets/Header/Linux.png';
import mongoDB from '../../../assets/Header/mongoDB.png';
import nodejs from '../../../assets/Header/Node.png';
import react from '../../../assets/Header/React.png';
import tailwind from '../../../assets/Header/tailwind.png';
import Redux from '../../../assets/Header/Redux.png';
import Next from '../../../assets/Header/Next.png';
import JavaScript from '../../../assets/Header/JavaScript.png';
import Sass from '../../../assets/Header/Sass.png';
import ReactNative from '../../../assets/Header/React-native.png';
import Express from '../../../assets/Header/Express.png';
import AWS from '../../../assets/Header/AWS.png';
import TypeScript from '../../../assets/Header/TypeScript.png';
import Json from '../../../assets/Header/Json.png';
import Figma from '../../../assets/Header/Figma.png';
import RestApi from '../../../assets/Header/RestApi.png';
import WebPack from '../../../assets/Header/webpack.png';
import python from '../../../assets/Header/python.png';
import mySql from '../../../assets/Header/mysql.png';
import windows from '../../../assets/Header/windows.png';
import Android from '../../../assets/Header/Android.png';
import Apple from '../../../assets/Header/apple.png';
import Electron from '../../../assets/Header/Electron.png';

import AnimationHeader from './AnimationHeader';


import '../../../assets/Fonts/fFinish.ttf';

// dependencie Animation
import { useTrail, animated } from '@react-spring/web';   
//  "react-fast-marquee";
import Marquee from "react-fast-marquee";
import { Rotate } from 'react-reveal';



const IMG = styled.img`
    width: 70%;
    // clip-path: polygon(49% 0, 100% 0, 100% 35%, 95% 66%, 90% 84%, 66% 100%, 37% 100%, 12% 90%, 0 48%, 0 0);
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
    const [ change, setChange] = useState(false);
    const textItems = ['Y', 'O', 'U', 'N', 'E', 'S', ' ', 'S', 'H', 'E', 'I', 'K', 'H', 'L', 'A', 'R'];

    const changeImage = () => {
        setChange(true)
    }
    const reChange = () => {
        setChange(false)
    }
    const trail = useTrail(textItems.length, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 200 }, // مدت زمان انیمیشن (میلی‌ثانیه)
        delay: index => 500 + index * 100, // تاخیر بر اساس ایندکس (میلی‌ثانیه)
    });

   

  return (
   <div  className='w-100 h-100 lg-mt-5 pt-lg-5 '>
    <AnimationHeader/>
    <Row className='container   m-auto '>
        <Col lg={6} className='text-align-center pt-lg-5 mt-lg-5'>
            <h1  className='text-light text-start Capsmall mt-5'>
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
        
        <Col lg={6} className='text-start pt-3 position-relative d-flex justify-content-end'>
       
            
            <div className=''>
            <IMG  src={goldYounes} alt="younes" style={{zIndex:2}}/>
                <button
                    onMouseEnter={changeImage}
                    onMouseLeave={reChange}
                    style={{
                        border:'none',
                        background:'transparent'
                    }}  
                >
                    {
                        // change? <IMG  src={Younes} alt="younes" style={{zIndex:2}}/> : <IMG  src={goldYounes} alt="younes" style={{zIndex:2}}/>
                    }
                
                 

                </button>
                
            </div>
            
        </Col>
        
    </Row>
        <Marquee style={{zIndex:1}}>
            <img src={bootstrap} style={{width:'50px', margin:'0 10px', zIndex:1}} />
            <img src={docker} style={{width:'50px', margin:'0 10px'}} />
            <img src={git} style={{width:'50px', margin:'0 10px'}} />
            <img src={github} style={{width:'50px', margin:'0 10px'}} />
            <img src={Linux} style={{width:'50px', margin:'0 10px'}} />
            <img src={mongoDB} style={{width:'50px', margin:'0 10px'}} />
            <img src={nodejs} style={{width:'50px', margin:'0 10px'}} />
            <img src={react} style={{width:'50px', margin:'0 10px'}} />
            <img src={tailwind} style={{width:'50px', margin:'0 10px'}} />
            <img src={Redux} style={{width:'50px', margin:'0 10px'}} />
            <img src={Next} style={{width:'50px', margin:'0 10px'}} />
            <img src={JavaScript} style={{width:'50px', margin:'0 10px'}} />
            <img src={Sass} style={{width:'50px', margin:'0 10px'}} />
            <img src={ReactNative} style={{width:'50px', margin:'0 10px'}} />
            <img src={Express} style={{width:'50px', margin:'0 10px'}} />
            <img src={AWS} style={{width:'50px', margin:'0 10px'}} />
            <img src={TypeScript} style={{width:'50px', margin:'0 10px'}} />
            <img src={Json} style={{width:'50px', margin:'0 10px'}} />
            <img src={Figma} style={{width:'50px', margin:'0 10px'}} />
            <img src={RestApi} style={{width:'50px', margin:'0 10px'}} />
            <img src={WebPack} style={{width:'50px', margin:'0 10px'}} />
            <img src={python} style={{width:'50px', margin:'0 10px'}} />
            <img src={mySql} style={{width:'50px', margin:'0 10px'}} />
            <img src={windows} style={{width:'50px', margin:'0 10px'}} />
            <img src={Android} style={{width:'50px', margin:'0 10px'}} />
            <img src={Apple} style={{width:'50px', margin:'0 10px'}} />
            <img src={Electron} style={{width:'50px', margin:'0 10px'}} />
        </Marquee>
   </div>
  )
}

export default Header