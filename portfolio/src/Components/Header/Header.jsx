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

const DIV = styled.div`
width: 350px;
height: 450px;
  border-radius:  30% 70% 70% 30% / 34% 30% 70% 66%  ;
  background: #e28317;
  
`

const IMG = styled.img`
    width: 90%;
    clip-path: polygon(49% 0, 100% 0, 100% 35%, 95% 66%, 90% 84%, 66% 100%, 37% 100%, 12% 90%, 0 48%, 0 0);
    @media screen and (max-width: 720px) {
        width: 320px;
    }
    @media screen and (max-width:375px) {
        margin:50px auto;
    }
`

const Header = () => {
  return (
   <div  className='w-100 h-100 lg-mt-5 pt-lg-5 '>
    <Row className='container   m-auto '>
        <Col className='text-align-center pt-lg-5 mt-lg-5'>
            <h1 className='text-dark text-start Capsmall'>YOUNES SHEIKHLAR</h1>
            <p className='text-dark text-start h3 mt-5'>I am a Web designer, Full stack developer</p>
            <div className='text-start d-flex flex-wrap mt-5'>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >Node.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >MongoDB</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >React.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >React-native</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >Tailwind</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >Express.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >MUI</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >UI/UX</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >SASS</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >Bootstrap</span>
            </div>
        </Col>
        <Col className='text-start pt-3'>
            <DIV className='w-100'>
                <IMG src={Younes} alt="younes" />
            </DIV>
        </Col>
    </Row>
    
   </div>
  )
}

export default Header