import React from 'react';
import styled  from 'styled-components';
import './main.css'
import Shape from '../../../assets/Home/Subtract.svg';
import {Row , Col} from 'react-bootstrap';

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
        <Col lg={6} className=' d-flex justify-content-center'>
          <div style={{maxWidth:'500px'}}>
            <img className='w-100 m-2' src={Shape} alt="" />
            <img className='w-100 m-2' src={Shape} alt="" />
            <img className='w-100 m-2' src={Shape} alt="" />
            <img className='w-100 m-2' src={Shape} alt="" />
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