import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import './style.css'
import snowflake from '../../assets/Navbar/snowflake.png';
import PapaNoel from '../../assets/Navbar/papanoel.gif';

const Menu = () => {
  const [expanded, setExpanded] = useState();

  const handleSelect = () => {
    setExpanded(); // Close the Navbar when a Nav item is selected
  };

  const DIV = styled.div`
    .ContentMenu{
      @media screen and (max-width: 992px) {
        height: auto;
        margin: 6px auto;
        padding: 10px 0 10px 0;
        border-radius:0 0 10px 10px;
        right:0;
        background-color: #EC8106;
      }
    }
    .navbar a{
      color:#fff;
      font-size:1.2rem;
      margin:0 5px;
    }
    .navbar .active {
      color:#403920;
      
    }
  
  `
  return (
    <DIV>
      <div class="area" >
        <ul class="circles">
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
          <li><img src={snowflake} style={{width:'100%'}} alt="" /></li>
        </ul>
      </div >
      <img src={PapaNoel} alt="" style={{width:'60px',marginLeft:'100px',marginTop:'-12px' , position:'absolute'}} />
      <Navbar className='navbar ' expand="lg" style={{marginLeft:'-200px'}}>
                
        <Container className='content '>
          <Navbar.Toggle
          style={{position:'fixed'}}
            aria-controls="basic-navbar-nav "
            onClick={() => setExpanded(false)}
          />
          <Navbar.Collapse id="basic-navbar-nav" className='w-100  ContentMenu' style={{marginTop:'200px',position:'fixed'}}>
            <Nav className="me-auto "  onClick={() => setExpanded(expanded ? false : 'expanded')}>
              <NavLink className='px-1 ' style={{textDecoration:'none'}} to='/' ><span className='fancy'>Home</span></NavLink>
              <NavLink className='px-1 ' style={{textDecoration:'none'}} to='/projects' ><span className='fancy'>Projects</span></NavLink>
              <NavLink className='px-1 ' style={{textDecoration:'none'}} to='/about' ><span className='fancy'>About</span></NavLink>
              <NavLink className='px-1 ' style={{textDecoration:'none'}} to='/contact' ><span className='fancy'>Contact</span></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </DIV>
    )
  }

export default Menu