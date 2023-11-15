import React from 'react'
import styled from 'styled-components';
import Menu from './Menu';

const Nav = styled.div `
  width: 100%;
  height: 70px;
  background: #ec8106;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:9000;
`
const ContainerMenu = styled.div`
  visibility: visible
  @media screen and(max-width:756px) {
    visibility: hidden;
  }
`
const Navbar = () => {
  return (
    <Nav>
      <ContainerMenu className='d-flex justify-content-center'>
        <Menu />
      </ContainerMenu>
    </Nav>
  )
}

export default Navbar