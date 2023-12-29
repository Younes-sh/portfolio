import React from 'react';
import styled  from 'styled-components';
import './main.css'
import Shape from '../../../assets/Home/Subtract.svg';
import {Row , Col} from 'react-bootstrap';

const DivPolygon_1 = styled.div `
  width: 400px
  height: 400px;
  padding: 15px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: justify;
  }
`
const DivPolygon_2 = styled.div `
width: 400px
height: 400px;
padding: 15px;
clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

`

const Main = () => {
  return (
    <div className='container 100-vh my-5 mx-auto py-5 d-flex flex-column justify-content-center align-items-center '>
      <section className='scroll-reveal d-flex flex-column justify-content-center align-items-center'
        animate={{ backgroundSize: '100% 100%' }}
        transition={{ duration: 1 }}
      >
        <h2 className=''>
         A Stunning Outlook on Front-End World
        </h2>
        <p className='mt-5' style={{maxWidth:'600px'}}>
          
          <span>
            As a front-end enthusiast, I take pride in sharing my digital creations a fusion of beauty and functionality that elevates user experience to new heights. My aim here is to present a credible and innovative perspective on the digital realm. I'm thrilled to have you accompany me on this journey.
          </span>
        </p>
      </section>

      <Row className='w-100  mt-5  pt-5  align-items-center'>
        <Col lg={6} className=' d-flex flex-column justify-content-center'>
          <DivPolygon_1 className='my-2'>
                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde nihil quam adipisci corporis neque quaerat asperiores! Beatae eum odio, nesciunt magni enim asperiores nostrum, repellendus, harum nemo rerum ratione!</p>
          </DivPolygon_1>
          <DivPolygon_1 className='my-2'>
                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde nihil quam adipisci corporis neque quaerat asperiores! Beatae eum odio, nesciunt magni enim asperiores nostrum, repellendus, harum nemo rerum ratione!</p>
          </DivPolygon_1>
          

          <div>

          </div>
        </Col>

        <Col lg={6} className='d-flex justify-content-center'>
          <div style={{width:'500px'}}>
            <img className='w-100 m-2' src={'https://images.pexels.com/photos/15012299/pexels-photo-15012299/free-photo-of-top-view-shot-of-sea-waves-crashing-the-sandy-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Main