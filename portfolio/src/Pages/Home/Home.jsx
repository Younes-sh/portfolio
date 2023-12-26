import { useEffect } from 'react';
import {Row,Col} from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import Items from '../../Components/Articles/items';
import SkilsComponent from '../../Components/Skils/SkilsComponent';
// import Carosel from '../../Components/Carosles/Carosel';
const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  },[])

  return (
    <div className=' w-100 vh-100 pt-2  pt-lg-5'>
      <Row className='my-5 pt-5'>
        <Col>
          <Header />
        </Col>
      </Row>
      {/* Main */}
      <Row className='my-lg-5 py-5'>
        <Col>
          <Items />
        </Col>
      </Row>
     
      <br />

      <Row className='my-lg-5 py-5 '>
        <Col>
          {/* <Learning /> */}
        </Col>
      </Row>

      <br />
      
    </div>
  )
}

export default Home