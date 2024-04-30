import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Menu from './Menu';
import Logo from '../../assets/LogoPortfolio.png';

const Nav = styled.div `
  width: 100%;
  height: 70px;
  background: #ec8106;
  display: flex;
  position: fixed;
  z-index:9000;

  @media screen and (max-width: 992px) {
    height: auto;
  }
`
const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Navbar = () => {
  return (
    <Nav>
      <Link className=' ' style={{textDecoration:'none'}} to='/' ><img style={{width:'70px'}} src={Logo} /></Link>
      <ContainerMenu className='container '>
        <Menu />
      </ContainerMenu>
    </Nav>
  )
}

export default Navbar