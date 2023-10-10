import React from 'react';
import './about.css';
import {Row , Col} from 'react-bootstrap';
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Image1 from '../../assets/Articls/Custom.png';

const About = () => {
  return (
    <div className='w-100  pt-5 About'>
      <h1 className='mt-5 '>About</h1>
      <Row className='container m-auto mt-4'>
        <Col lg={8} className='border text-start '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias labore et qui reiciendis dolorum dicta sit temporibus, autem rerum sunt vel at laborum sapiente vitae neque doloribus dolorem nesciunt nostrum.
        </Col>
        <Col lg={4} className='border '>
          <ImageComponent imageUrl={Image1} altText='cv' />
        </Col>
      </Row>
      
    </div>
  )
}

export default About