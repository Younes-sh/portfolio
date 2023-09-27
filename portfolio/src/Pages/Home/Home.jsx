import React from 'react';
import {Row,Col} from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import Items from '../../Components/Articles/items';
import Main from '../../Components/Main/Main';

const Home = () => {
  return (
    <div className=' w-100 vh-100 pt-5'>
      <Row className='my-5 pt-5'>
        <Col>
          <Header />
        </Col>
      </Row>
      {/* Main */}
      <Row className='pt-5 mt-5'>
        <Col>
          <Items />
        </Col>
      </Row>
     
      <br />
      <Row className='py-5 my-5'>
        <Col>
          <Main />
        </Col>
      </Row>
      
    </div>
  )
}

export default Home