import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import './style.css'

const Menu = () => {
  const [expanded, setExpanded] = useState(true);

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
     
      <Navbar className='navbar ' expand="lg" style={{position:'fixed',marginTop:'-20px',marginLeft:'-200px'}}>
                
            <Container className='content '>
              <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            
          />
                <Navbar.Collapse id="basic-navbar-nav" className='w-100  ContentMenu' >
                  <Nav className="me-auto " onClick={() => setExpanded(expanded ? false : 'expanded')}>
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