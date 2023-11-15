import {useState , useEffect} from 'react';
import CardProject from '../../Components/Cards/CardProject';
import Spinner  from '../../Components/Spiner/Spiner';

const Projects = () => {
    const [ items , setItems ] = useState([]);
    const [loading, setLoading] = useState(true); // اضافه کردن متغیر loading

    const URL_API = process.env.REACT_APP_URL_API;
    useEffect(() => {
      fetch(`${URL_API}/api/projects`)
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
            <div className='w-100 100-vh  d-flex justify-content-center '>
              <Spinner  />
            </div>
            ) : (
              <div className=' d-flex flex-wrap justify-content-center '>
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