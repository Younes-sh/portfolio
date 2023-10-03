import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';


const Menu = () => {

  const DIV = styled.div`
    .navbar a{
      color:black;
      marging:5px 20px;
      border-bottom-width: 2px ;
      font-size:1.2rem;
    }
    @media screen and (max-wid:768px) {
      .navbar a{
        color:black
      }
    }
    .navbar .active {
      color:brown;
      border-top:solid 2px;
    }
  `
  return (
    <DIV>
      <Navbar className='navbar' expand="lg" style={{position:'fixed',marginTop:'-20px',marginLeft:'-200px'}}>
            <Container className='content'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavLink className='px-3 ' style={{textDecoration:'none'}} to='/' >Home</NavLink>
                <NavLink className='px-3 ' style={{textDecoration:'none'}} to='/projects' >Projects</NavLink>
                <NavLink className='px-3 ' style={{textDecoration:'none'}} to='/about' >About</NavLink>
                <NavLink className='px-3 ' style={{textDecoration:'none'}} to='/contact' >Contact</NavLink>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </DIV>
    )
  }

export default Menu