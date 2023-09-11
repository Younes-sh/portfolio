import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height :100vh;
  background-color: #000102;
  display: flex;
  justify-content: center;
  position: relative;
`
const ContentBack = styled.div`
  width: 90%;
  height: 100vh;
  border: solid .1rem;
  position: absolute;
  z-index: 1000;
  background-image: url('https://i.pinimg.com/originals/af/a9/24/afa92424317d162894bd1379823b7fdc.gif');
  background-position: center;
  background-size: cover;
  position: fixed;
`
const ContentFront = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0816168d;
  border: solid .1rem;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
`

const Home = () => {
  return (
    <Container>
      <ContentBack>
        <img src="" alt="" />
      </ContentBack>

      <ContentFront>
        Fornt
      </ContentFront>
    </Container>
  )
}

export default Home