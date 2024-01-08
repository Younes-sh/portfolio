import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import Logo from '../../assets/LogoPortfolio.png'

const Footer = () => {

    const Div = styled.div `
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 4000;

            @media  (max-width:992px) {
                margin-top: 300px;
                padding-bottom: 350px;
            }
    `
    const UL = styled.ul `
        list-style: none;
        text-align: start;

        @media  (max-width:992px) {
            display: flex;
            flex-direction: column;
           justify-content: center;
           align-items: center;
        }
    `
    const ContainerLogo = styled.div `
        border-right: 1px solid;
            padding: 0.5em;
        @media  (max-width:992px) {
            border-right: none;
            border-bottom: 1px solid;
        }
    `
  return (
    <Div >
        <hr className='text-light' />

        <Row className='container text-light '>
        <Col lg={3}>
                <UL>
                    <ContainerLogo className='d-flex flex-column justify-content-center align-items-center '>
                        <img style={{width:'100px'}} src={Logo} alt="" />
                        <div>
                            <p>I am actively engaged in front-end web development</p>
                            <b>Be bold</b>
                        </div>
                    </ContainerLogo>
                    
                </UL>
            </Col>
            <Col lg={3}>
                <UL>
                    <h5 className='text-warning'>CONTENT</h5>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </UL>
            </Col>
            <Col lg={3}>
                 <UL>
                    <h5 className='text-warning'>SERVICES</h5>
                    <li>Creation</li>
                    <li>Maintenance</li>
                    <li>Consulting</li>
                </UL>
            </Col>
            <Col lg={3}>
            <UL>
                    <h5 className='text-warning'>FOLLOW</h5>
                    <li>
                        <a target='_blank' className='' href="https://www.linkedin.com/in/younes-sheikhlar/">
                            <img style={{width:'30px'}} src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'>

                            </img>
                        </a>
                        <a target='_blank' className='mx-2' href="https://www.pinterest.com/sheikhlaryounes/">
                            <img style={{width:'30px'}}  src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/pinterest-512.png" alt="" />
                        </a>
                        <a target='_blank' className='mx-2' href="https://dribbble.com/younessh">
                            <img style={{width:'30px'}} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/dribbble-512.png" alt="" />
                        </a>
                        
                    </li>
                </UL>
            </Col>
        </Row>
        <hr className='w-100 border'/>
        <span style={{color:'#ccc'}}>	&#169; copyright</span>
    </Div>
  )
}

export default Footer