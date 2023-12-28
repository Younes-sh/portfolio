import React from 'react';
import styled  from 'styled-components';
import './main.css'

const Div = styled.div`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,6,1) 35%);
`

const Main = () => {
  return (
    <div className='container 100-vh my-5 mx-auto py-5 d-flex flex-column justify-content-center align-items-center '>
      <section className='scroll-reveal d-flex flex-column justify-content-center align-items-center'>
        <h2 className=''>
         A Stunning Outlook on Front-End World
        </h2>
        <p className='mt-5' style={{maxWidth:'600px'}}>
          
          <span>
          As a front-end enthusiast, I take pride in sharing my digital creations—a fusion of beauty and functionality that elevates user experience to new heights. My aim here is to present a credible and innovative perspective on the digital realm. I'm thrilled to have you accompany me on this journey.
          </span>
          
        </p>
      </section>
    </div>
  )
}

export default Main