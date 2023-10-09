import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carosel() {
  const [items, setData] = useState([]);

  const API_URL = process.env.REACT_APP_URL_API;


 

  useEffect(() => {
    fetch(`${API_URL}/api/projects/`)
    .then(res => res.json())
    .then(res => setData(res.data))
     
  }, []);
  
  

  return (
    <div className="Carosel container ">
      <Carousel className='w-75 m-auto'>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.UrlImage} alt={item.title} />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carosel;
