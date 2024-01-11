import {useState , useEffect} from 'react';
import CardProject from '../../Components/Cards/CardProject';

import Spiner from '../../Components/Spiner/Spiner';

const Projects = () => {
    const [ items , setItems ] = useState([]);
    const [loading, setLoading] = useState(true); // اضافه کردن متغیر loading

    useEffect(() => {
      window.scrollTo(0, 0); // اسکرول به بالای صفحه
    },[])
    
    const Local_API = 'http://localhost:5000/api/projects/'
    const URL_API = process.env.REACT_APP_URL_API;
    useEffect(() => {
      fetch(`${URL_API}/api/projects` && Local_API)
          .then(res => res.json())
          .then(res => {
              setItems(res.data);
              setLoading(false); // دیگر در حالت بارگیری نیست
          })
          .catch(error => console.log(error));
  }, []);
  return (
    <div className='w-100 100-vh  d-flex  justify-content-center '>
        <div className='container 100-vh  d-flex flex-wrap justify-content-start'>
          {loading ? ( // اگر در حال بارگیری هستیم، اسپینر را نمایش بده
            <div className='w-100 100-vh  d-flex justify-content-center mt-5 pt-5 '>
              <Spiner  />
            </div>
            ) : (
              <div className='w-100 100-vh d-flex flex-wrap  justify-content-center   m-auto'>
              {
              items.map(item => <CardProject key={item.id} {...item} />)

              }
            </div>
          )}
        </div>
        
    </div>
  )
}

export default Projects