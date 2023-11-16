import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import './style.css'

const Menu = () => {

  const DIV = styled.div`
    
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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <Navbar className='navbar ' expand="lg" style={{position:'fixed',marginTop:'-20px',marginLeft:'-200px'}}>
      
                
            <Container className='content '>
              <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className='w-100  '>
                <Nav className="me-auto ">
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