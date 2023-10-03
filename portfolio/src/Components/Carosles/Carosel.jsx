import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carosel() {
  const [data, setData] = useState([]);

  const API_URL = process.env.REACT_APP_URL_API;

//   const response = await fetch('http://localhost:5000/api/projects');
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const result = await response.json();
  
        // تبدیل داده به یک آرایه
        const dataArray = Array.from(result);
  
        setData(dataArray);
      } catch (error) {
        console.error('خطا در دریافت داده‌ها: ', error);
      }
    };
  
    fetchData();
  }, []);
  
  

  return (
    <div className="Carosel">
      <Carousel>
        {data.map((item, index) => (
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
