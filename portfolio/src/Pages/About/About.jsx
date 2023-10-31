import React from 'react';
import './about.css';
import {Row , Col} from 'react-bootstrap';
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Image1 from '../../assets/About/CV-sheikhlar.png';
import CvPDF from '../../assets/About/CV-Sheikhlar.pdf'

const About = () => {
  return (
    <div className='w-100  pt-5 About '>
      <Row className='container m-auto mt-4 pt-5'>
        <Col lg={8} className=' text-start mt-5 p-4'>
          <h3>About me</h3>
        After working few years as a pharmacy assistant, I have decided to switch to the development field. During my bootcamp at Becode, I have gained experience in basic website design issues such as HTML, CSS and Javascript. I also have worked with frameworks and libraries, which include: Bootstrap, Tailwind, React.js , Next.js, MySql, Docker. Now, I am looking for an internship starting from November 2022.

        <p className='pt-5'>Après avoir effectué une formation de 1 an à 38 ans, j’aspire à trouver mon premier emploi en tant que développeur web. Même si je n’ai pas encore d’expérience concrètes en entreprises, j’ai cependant développé de nombreux projets personnels pendant mon temps libre. N’hésitez à consulter mon portfolio sur mon site web https://github.com/Younes-sh</p>
        <p className='pt-5'>
        J’ai également réalisé un stage du décembre 2022 au février 2023 chez SMILE, un start up qui offre un service de mise en relation pour pharmacie et particuliers. 
        </p>

        <p className="pt-5">Ayant un goût pour l’analyse rigoureuse et sans filtre des résultats, j’ai relevé de nombreux challenges et n'hésite pas à remettre en question mes certitudes afin d’atteindre mes objectifs.</p>
        <p className="pt-5"></p>
        <p className="pt-5"></p>
        </Col>
        <Col lg={4} className=' pt-5 d-flex '>
          <ImageComponent Title={'CV'} Image={Image1}  PDF={CvPDF} Alt={'cv'} />
        </Col>
      </Row>
      
    </div>
  )
}

export default About