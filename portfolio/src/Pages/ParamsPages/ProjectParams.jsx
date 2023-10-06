import { useState , useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import { Row , Col} from 'react-bootstrap';
const ProjectParams = () => {
    const [ item , setItem] = useState([]);
    const itemID = useParams().itemID;

    const URL_API = process.env.REACT_APP_URL_API;
    useEffect(() => {
        fetch(`${URL_API}/api/projects/${itemID}`)
        .then(res => res.json())
        .then(res => setItem(res.data))
        .catch(error => console.log(error))
    },[])
  return (
    <div className='py-5'>
        <Row className='container m-auto mt-5 pt-5 '>
            <Col lg={4} className=' text-start order-2 order-lg-1 mt-4 mt-lg-0'>
                <h1 className='pt-5'>{item.title}s</h1>
                <p>
                    {item.description}
                </p>

                <div className='d-flex justify-content-between'>
                    <Link target='_blank' to={`${item.directLink}`} className='btn btn-success'>View Site</Link>
                    <Link to={`/projects`} className='btn btn-info text-light'>Back to Projects page</Link>
                </div>
            </Col>
            <Col lg={8} className='order-1 order-lg-2'>
                <img style={{width:'100%'}} src={item.UrlImage} alt={item.title} />
            </Col>
    </Row>
    </div>
  )
}

export default ProjectParams