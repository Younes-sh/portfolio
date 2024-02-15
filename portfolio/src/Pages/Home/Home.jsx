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
          <Header />
      </Row>
      {/* Main */}
      <Row className='py-5'>
          <Items />
      </Row>
     
      <br />

      <Row className=' pt-5 '>
          <MainOne />
      </Row>

      <Row>
          {/* SEO section */}
          <MainTwo />
      </Row>

      <br />
    </div>
  )
}

export default Home