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

  return (
    <div className='Contact   py-5   pt-5 text-light'>
      <div className='container h-100   d-flex   mt-5 pt-5'>
        <div className='w-100 d-lg-flex flex-wrap  justify-content-center  text-start'>
          <div  className='d-flex flex-lg-column  align-items-center w-sm-100  w-lg-25 ' >
            <div className='d-flex flex-column justify-content-sm-around  align-items-center align-items-lg-start mx-auto   containerContact'>
            <h5>CONTACT INFO</h5>
              <div className='d-flex    flex-lg-column m-auto flex-md-row  flex-sm-row flex-xs-row '>

                <div >
                  <img className='w-sm-25' src={Email} alt="email" />
                  <span> <a style={{textDecoration:'none', color:'#fff'}} href="mailto:sheikhlaryounes@gmail.com"> sheikhlaryounes@gmail.com</a></span>
                </div>

                <div className='mx-md-2 mx-sm-2 mx-lg-0  '>
                  <img className='w-sm-25' style={{color:'#ccc'}} src={Location} alt="Location" />
                  <span> Belgium, Brussels</span>
                </div>
              </div>


              <div className='mt-5 pt-5 text-start '>
                <h5>SOCIAL INFO</h5>
                <a  className='' target='_blank' href="https://github.com/Younes-sh"><img src={Github} alt='github'></img></a>
                <a  className='mx-2' target='_blank' href="https://dribbble.com/younessh"><img src={Diribbble} alt='github'></img></a>
                <a  className='' target='_blank' href="https://www.linkedin.com/in/younes-sheikhlar/"><img src={Linkedin} alt='Linkedin'></img></a>
                <a  className='mx-2' target='_blank' href="https://www.pinterest.com/sheikhlaryounes/"><img src={Pinterest} alt='pinterest'></img></a>
              </div>
            </div>

          </div>

          {/* Form */}


          <div  className='w-md-100 w-lg-75 mt-sm-5 mt-md-5 d-flex justify-content-center    justify-content-lg-end mt-lg-0 '>
            <div className='d-flex flex-column  formContact mt-5 mt-lg-0 bg-danger'>
              <p className='fs-3'>Let's work <span style={{color:'#EC8106'}}>together</span></p>
              <Form />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Contact