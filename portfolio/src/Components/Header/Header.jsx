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

const DIV = styled.div`
width: 350px;
height: 450px;
  border-radius:  30% 70% 70% 30% / 34% 30% 70% 66%  ;
  background: #e28317;
  
`

const IMG = styled.img`
    width: 90%;
    clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 0 1%);
    @media screen and (max-width: 720px) {
        width: 320px;
    }
`

const Header = () => {
  return (
   <div className='w-100 h-100 border  pt-5 mt-5'>
    <Row className='container   m-auto '>
        <Col className='text-align-center pt-5 mt-5'>
            <h1 className='text-dark text-start'>YOUNES</h1>
            <h1 className='text-dark text-start'>SHEIKHLAR</h1>
            <p className='text-dark text-start h3'>i'm a web Designer Front-End developer</p>
            <div className='text-start d-flex flex-wrap '>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >Node.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >MongoDB</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >React.js</span>
                <span className='px-3 text-light' style={{backgroundColor:'#f19e3e', margin:'5px',borderRadius:'5px'}} >Bootstrap</span>
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
                <IMG src={Younes} alt="" />
            </DIV>
        </Col>
    </Row>
    
   </div>
  )
}

export default Header