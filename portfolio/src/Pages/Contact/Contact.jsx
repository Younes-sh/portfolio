import {useState} from 'react';
import './style.css';
import {Row,Col} from 'react-bootstrap';
import Github from '../../assets/Contact/github.png';
import Diribbble from '../../assets/Contact/dribbble.png';
import Linkedin from '../../assets/Contact/linkedin.png';
import Pinterest from '../../assets/Contact/pinterest.png';
import Location from '../../assets/Contact/location.png';
import Email from '../../assets/Contact/email.png';

const Contact = () => {
  const [data, setData] = useState({});

  const controlHndler = (e) => {
    setData({...data, [e.target.name ] : e.target.value})
  }

  const senHandler = () => {

  }
  return (
    <div className='Contact  d-flex align-items-center  pt-sm-5'>
      <div className='container   pt-sm-5'>
        <Row className=' text-light  lg-flex-row'>
        <Col lg={4} className='d-flex flex-column text-start' >
          <h5>CONTACT INFO</h5>
          <div className='d-flex flex-lg-column justify-content-sm-around containerContact '>
            <div className=''>
              <img src={Email} alt="email" />
              <span> <a style={{textDecoration:'none', color:'#fff'}} href="mailto:sheikhlaryounes@gmail.com">sheikhlaryounes@gmail.com</a></span>
            </div>
            
            <div className=''>
              <img style={{color:'#ccc'}} src={Location} alt="Location" />
              <span> Belgium, Brussels</span>
            </div>

          </div>
          <div className='mt-5'>
            <h5>SOCIAL INFO</h5>
            <Col className='pt-2'>
              <a  className='' target='_blank' href="https://github.com/Younes-sh"><img src={Github} alt='github'></img></a>
              <a  className='mx-2' target='_blank' href="https://dribbble.com/younessh"><img src={Diribbble} alt='github'></img></a>
              <a  className='' target='_blank' href="https://www.linkedin.com/in/younes-sheikhlar/"><img src={Linkedin} alt='Linkedin'></img></a>
              <a  className='mx-2' target='_blank' href="https://www.pinterest.com/sheikhlaryounes/"><img src={Pinterest} alt='pinterest'></img></a>
            </Col>

          </div>
        </Col>
        {/*  */}
        <Col lg={8} className='mt-5  mt-lg-0'>
              <div className='d-flex flex-column border-2 formContact mt-5 mt-lg-0'>
                <h1>Let's work <span style={{color:'#EC8106'}}>together</span></h1>
                <input onChange={(e) => controlHndler(e , 'name')} name='name' className='textinput' type="text" placeholder='Name *'/>
                <input onChange={(e) => controlHndler(e , 'email')} name='email' className='textinput' type="text" placeholder='Email *'/>
                <input onChange={(e) => controlHndler(e , 'subject')} name='subject' className='textinput' type="text" placeholder='Your subject *' />
                <textarea onChange={(e) => controlHndler(e , 'message')} name='message' className='textinput' type="text" rows={7}  placeholder='Message'></textarea>
                <button onClick={senHandler} type='button'>Send Message</button>
              </div>
        </Col>
        
        </Row>
      </div>
    </div>
  )
}

export default Contact