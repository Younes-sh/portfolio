import { useEffect } from 'react';
import {Row,Col} from 'react-bootstrap'
import Header from '../../Components/Home/Header/Header';
import Items from '../../Components/Articles/items';
import MainOne from '../../Components/Home/Main/MainOne';
import MainTwo from '../../Components/Home/Main/MainTwo';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  },[])

  return (
    <div className=' w-100  pt-2  pt-lg-5'>
      <Row className='my-5 pt-5 m-auto'>
        <Col lg={12}>
          <Header />
        </Col>
      </Row>
      {/* Main */}
      <Row className='py-5'>
        <Col lg={12}>
          <Items />
        </Col>
      </Row>
     
      <br />

      <Row className=' py-5 '>
        <Col lg={12}>
          <MainOne />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <MainTwo />
        </Col>
      </Row>

      <br />
    </div>
  )
}

export default Home