import Carosel from '../../Components/Carosles/Carosel';
import {useState , useEffect} from 'react';
const Favorites = () => {
  const [items, setItems] = useState([]);

  const API_URL = process.env.REACT_APP_URL_API;
    
    useEffect(() => {
        fetch(`${API_URL}/api/projects`)
        .then(res => res.json())
        .then(res => setItems(res.data))
        .catch(err => console.log(err))
    }, []);
    
  return (
    <div>
      <div>
        <Carosel />
      </div>
    </div>
  )
}

export default Favorites