import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const Footer = () => {

    const Div = styled.div `
        width: 100%;
        height: 400px;
    `
  return (
    <Div >
        <hr className='text-light' />

        <Row>
            <Col lg={4}>
                <ul>
                    <li>Addres</li>
                    <li>Call</li>
                    <li>About</li>
                    <li></li>
                </ul>
            </Col>
            <Col lg={4}>

            </Col>
            <Col lg={4}>

            </Col>
        </Row>

        <span style={{color:'#ccc'}}>	&#169; copy right</span>
    </Div>
  )
}

export default Footer