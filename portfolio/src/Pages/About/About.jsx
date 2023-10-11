import React from 'react';
import './about.css';
import {Row , Col} from 'react-bootstrap';
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Image1 from '../../assets/younes-sheikhlar-cv.png';

const About = () => {
  return (
    <div className='w-100  pt-5 About '>
      <Row className='container m-auto mt-4 pt-5'>
        <Col lg={8} className=' text-start mt-5 p-4'>
          <h3>About me</h3>
        After working few years as a pharmacy assistant, I have decided to switch to the development field. During my bootcamp at Becode, I have gained experience in basic website design issues such as HTML, CSS and Javascript. I also have worked with frameworks and libraries, which include: Bootstrap, Tailwind, React.js , Next.js, MySql, Docker. Now, I am looking for an internship starting from November 2022.
        </Col>
        <Col lg={4} className=''>
          <ImageComponent Title={'CV'}Image={Image1}  urlToHugeImageFile={Image1} Alt={'cv'} />
        </Col>
      </Row>
      
    </div>
  )
}

export default About