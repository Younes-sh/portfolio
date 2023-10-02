import {useState , useEffect} from 'react';
import CardProject from '../../Components/Cards/CardProject';

const Projects = () => {
    const [ items , setItems ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/projects/')
        .then(res => res.json())
        .then(res => setItems(res.data))
        .catch(error => console.log(error))
    },[])
  return (
    <div className='w-100 100-vh pt-5'>
        <h1 className='pt-5'>Projects</h1>
        <div className='container 100-vh my-3 d-flex flex-wrap '>
        {
            items.map(item => <CardProject key={items} {...item}/>)
        }
        </div>
    </div>
  )
}

export default Projects