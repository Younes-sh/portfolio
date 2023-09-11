import React from 'react'
import styled from 'styled-components';
import Menu from './Menu';

const Nav = styled.div `
  background: #012439;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Navbar = () => {
  return (
    <Nav>
      <Menu />
    </Nav>
  )
}

export default Navbar