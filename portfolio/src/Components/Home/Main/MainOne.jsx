import React from 'react';
import styled  from 'styled-components';
import './main.css'
import Shape from '../../../assets/Home/Subtract.svg';
import {Row , Col} from 'react-bootstrap';

import ChangeItem from './ChangeItem';


const Main = () => {
  return (
    <div>
      <div className='container 100-vh my-5 mx-auto py-5 d-flex flex-column justify-content-center align-items-center m-auto'>
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

       
      </div>
      <Row>
        <ChangeItem />
      </Row>
    </div>
  )
}

export default Main