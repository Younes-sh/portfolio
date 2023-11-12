import { useState , useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import { Row , Col} from 'react-bootstrap';
import styled from 'styled-components'
const ProjectParams = () => {
    const [ item , setItem] = useState([]);
    const itemID = useParams().itemID;

    const IMG = styled.img `
        width:60px;
        transform:rotate(-40deg);
    `
   

    const URL_API = process.env.REACT_APP_URL_API;
    useEffect(() => {
        fetch(`${URL_API}/api/projects/${itemID}`)
        .then(res => res.json())
        .then(res => setItem(res.data))
        .catch(error => console.log(error))
    },[])
  return (
    <div className='py-5 '>
        <Row className='container m-auto mt-5 pt-5 '>
            <Col lg={4} className=' text-start order-2 order-lg-1 mt-4 mt-lg-0'>
                <h3 className='pt-5'><span className='text-secondary'>Project:</span> {item.title}</h3>
                <h5 className='mt-3'><span className='text-secondary'>Technology:</span> {item.details}</h5>
                <p style={{textAlign:'justify'}} className='mt-5'>
                    {item.description}
                </p>

                <div className='d-flex justify-content-between'>
                    <Link target='_blank' to={`${item.directLink}`} className='btn btn-success'>View Site</Link>
                    <Link to={`/projects`} className='btn btn-info text-light'>Back to Projects page</Link>
                </div>
            </Col>
            <Col lg={8} className='order-1 order-lg-2 shadow-lg p-0 position-relative'>
                <IMG  className=' position-absolute' src={item.situation} />
                <img style={{width:'100%'}} src={item.UrlImage} alt={item.title} />
            </Col>
        </Row>
        <Row>
            <Col lg={12} className='w-100 h-100'>
                <div style={{width:'100%',height:'0px',position:'relative',paddingBottom:'56.294%'}}>
                    {/* <iframe src={item.UrlVideo} frameborder="0" width="100%" height="100%" allowfullscreen style={{width:'100%',height:'100%',position:'absolute',left:'0px',top:'0px',overflow:'hidden'}}></iframe> */}
                    <iframe allow="autoplay" frameborder="0" src={item.UrlVideo} width="100%" height="740" allowfullscreen></iframe>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default ProjectParams