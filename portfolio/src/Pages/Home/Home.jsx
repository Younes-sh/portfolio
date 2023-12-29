import { useEffect } from 'react';
import {Row,Col} from 'react-bootstrap'
import Header from '../../Components/Home/Header/Header';
import Items from '../../Components/Articles/items';
// import Carosel from '../../Components/Carosles/Carosel';
import MainOne from '../../Components/Home/Main/MainOne';
import MainTwo from '../../Components/Home/Main/MainTwo';
import AnimationHeader from '../../Components/Home/Header/AnimationHeader';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  },[])

  return (
    <div className=' w-100  pt-2  pt-lg-5'>
      <Row className='my-5 pt-5'>
        <Col>
          <Header />
        </Col>
      </Row>
      {/* Main */}
      <Row className='py-5'>
        <Col>
          <Items />
        </Col>
      </Row>
     
      <br />

      <Row className=' py-5 '>
        <Col>
          <MainOne />
        </Col>
      </Row>

      <Row>
        <Col>
          <MainTwo />
          <AnimationHeader />
        </Col>
      </Row>

      <br />
    </div>
  )
}

export default Home