import { useEffect } from 'react';
import './style.css';
import Form from './Form';
import {Row,Col} from 'react-bootstrap';
import Github from '../../assets/Contact/github.png';
import Diribbble from '../../assets/Contact/dribbble.png';
import Linkedin from '../../assets/Contact/linkedin.png';
import Pinterest from '../../assets/Contact/pinterest.png';
import Location from '../../assets/Contact/location.png';
import Email from '../../assets/Contact/email.png';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  },[])

  return (
    <div className='Contact   py-5   pt-5 text-light'>
      <div className='container h-100   d-flex   mt-5 pt-5'>
        <Row className='w-100 d-lg-flex flex-wrap  justify-content-center  text-start'>
          <Col lg={4}  className='d-flex flex-lg-column  align-items-center w-sm-100  w-lg-25 ' >
            <div className='d-flex flex-column justify-content-sm-around  align-items-center align-items-lg-start mx-auto   containerContact'>
            <h5 className=''>CONTACT INFO</h5>
              <div className='m-auto  '>
                <div >
                  <img className='' src={Email} alt="email" />
                  <span style={{width:'100px'}}> <a style={{textDecoration:'none', color:'#fff', width:'100%'}} href="mailto:sheikhlaryounes@gmail.com" className=''> sheikhlaryounes@gmail.com</a></span>
                </div>

                <div className=' '>
                  <img className='' style={{color:'#ccc'}} src={Location} alt="Location" />
                  <span  className=''> Belgium, Brussels</span>
                </div>
              </div>


              <div className='mt-5 pt-5 text-start '>
                <h5 className=''>SOCIAL INFO</h5>
                <a  className='' target='_blank' href="https://github.com/Younes-sh"><img src={Github} alt='github'></img></a>
                <a  className='mx-2' target='_blank' href="https://dribbble.com/younessh"><img src={Diribbble} alt='github'></img></a>
                <a  className='' target='_blank' href="https://www.linkedin.com/in/younes-sheikhlar/"><img src={Linkedin} alt='Linkedin'></img></a>
                <a  className='mx-2' target='_blank' href="https://www.pinterest.com/sheikhlaryounes/"><img src={Pinterest} alt='pinterest'></img></a>
              </div>
            </div>

          </Col>

          {/* Form */}


          <Col lg={8}  className='' >
            <div className='d-flex flex-column  formContact mt-5 mt-lg-0 m-auto' style={{backgroundColor:'#EC8106'}}>
              <p className='fs-3 text-dark'>Let's work <span style={{color:'#fff'}}>together</span></p>
              <Form />
            </div>
          </Col>
        
        </Row>
      </div>
    </div>
  )
}

export default Contact