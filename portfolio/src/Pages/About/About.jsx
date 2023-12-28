import {useEffect} from 'react';
import styled from 'styled-components';
import {Row , Col} from 'react-bootstrap';
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Image1 from '../../assets/About/CV-sheikhlar.png';

const P = styled.p`
  text-align: justify;
`

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  },[])

  return (
    <div className='w-100  h-100 d-inline-block  pt-5'>
      <Row className='container  m-auto mt-4 pt-5 text-light'>
        <Col lg={8} className=' text-start mt-5 p-4'>
          <h2 style={{color:'#EC8106'}} >About me</h2>
          <br />
          <br />
          <P className=' text-justify'>I am an organized, determined, and creative person who is eager to work with established or growing companies. I am looking for a position as a front-end developer in a dynamic and innovative company where I can use my skills and experience to achieve growth, success and development by providing strategic solutions to challenges.</P>


        <P className='pt-5 text-justify'>I am a diligent person with a keen interest in learning new technologies. Consequently, I exhibit great flexibility in my work approach and eagerly anticipate engaging in new projects to further expand my technological expertise.</P>
        

        <P className="py-5 text-justify">My passion lies in problem-solving, and I am inherently focused on achieving tangible results in my work.</P>
        <P className="pt-5 text-justify"></P>
        <P className="pt-5 text-justify"></P>
        </Col>
        <Col lg={4} className=' pt-5 d-flex '>
          <ImageComponent Title={'CV'} Image={Image1}   Alt={'cv'} />
        </Col>
      </Row>
      
    </div>
  )
}

export default About