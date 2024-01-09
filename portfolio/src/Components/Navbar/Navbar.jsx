import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Menu from './Menu';
import Logo from '../../assets/LogoPortfolio.png';

const Nav = styled.div `
  width: 100%;
  height: 70px;
  background: #ec8106;
  display: flex;
  align-items: center;
  position: fixed;
  z-index:9000;
  
`
const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
`
const Navbar = () => {
  return (
    <Nav>
      <ContainerMenu className='container m-auto'>
      <Link className=' ' style={{textDecoration:'none'}} to='/' ><img style={{width:'70px'}} src={Logo} /></Link>
        <Menu />
      <Link className=' ' style={{textDecoration:'none'}}  ></Link>
      </ContainerMenu>
    </Nav>
  )
}

export default Navbar