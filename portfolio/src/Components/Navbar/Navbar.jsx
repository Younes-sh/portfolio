import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Menu from './Menu';
import Logo from '../../assets/LogoPortfolio.png';
import DarkMode from '../Dark_Mode/DarkMode';

const Nav = styled.div `
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background: #ec8106;
  
  position: fixed;
  z-index:9000;

  @media screen and (max-width: 992px) {
    height: auto;
  }
`
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`



const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Link className=' ' style={{textDecoration:'none'}} to='/' ><img style={{width:'70px'}} src={Logo} /></Link>
        <ContainerMenu className='container '>
          <Menu />
        </ContainerMenu>
        <div>
          <DarkMode />
        </div>
      </Container>
    </Nav>
  )
}

export default Navbar