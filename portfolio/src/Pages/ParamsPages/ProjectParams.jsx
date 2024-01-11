import { useState , useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import { Row , Col} from 'react-bootstrap';
import styled from 'styled-components';

const GitHub = 'https://cdn4.iconfinder.com/data/icons/bettericons/354/github-512.png'
const Local_API = 'http://localhost:5000/api/projects/'

const ProjectParams = () => {
    const [ item , setItem] = useState([]);
    const itemID = useParams().itemID;

    const IMG = styled.img `
        width:60px;
        transform:rotate(-40deg);
    `
   

    const URL_API = process.env.REACT_APP_URL_API;
    useEffect(() => {
        fetch(`${URL_API}/api/projects/${itemID}` && `${Local_API}/${itemID}`)
        .then(res => res.json())
        .then(res => setItem(res.data))
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        window.scrollTo(0, 0); // اسکرول به بالای صفحه
    },[])
  return (
    <div className='py-5 '>
        <Row className='container m-auto mt-5 pt-5 '>
            <Col lg={4} className=' text-start order-2 order-lg-1 mt-4 mt-lg-0'>
                <h3 className='pt-5 text-light'><span>Project:</span> {item.title}</h3>
                <h5 className='mt-3 text-light'><span>Technology:</span> {item.details}</h5>
                <p style={{textAlign:'justify', color:'#ccc'}} className='mt-5'>
                    {item.description}
                </p>

                <div className='d-flex justify-content-between'>
                    <Link to={`/projects`} className='btn btn-info text-light'>Back to Projects page</Link>
                    <Link target='_blank' to={`${item.directLink}`} className='btn btn-success'>View Site</Link>
                </div>
                

                {
                    item.github ?  (
                        <div className='mt-3'> 
                            <Link target='_blank' to={`${item.github}`} className='btn btn-dark d-flex align-center justify-center' ><img src={GitHub} alt="Github" style={{width:'30px'}} />Github</Link>
                        </div>
                    ) : <p className='bg-warning mt-3 p-3  rounded-2'>Access to GitHub is not possible. It is private</p>
                }
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