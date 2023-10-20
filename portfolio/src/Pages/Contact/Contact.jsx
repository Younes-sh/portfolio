import React from 'react';
import './style.css';
import {Row,Col} from 'react-bootstrap';
import CardContact from '../../Components/Cards/CardContact';

const Contact = () => {
  return (
    <div className='Contact pt-5 d-flex flex-column '>
      <div className='w-100 m-auto px-5 d-flex flex-column'>
        <div  className='Child '>
          <CardContact title={'GitHub'} link={'https://github.com/Younes-sh'} IMG='https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif' />
        </div>
        <div  className='Child '>
        <CardContact title={'LinkedIn'} link={'https://www.linkedin.com/in/younes-sheikhlar/'} IMG='https://cdn.pixabay.com/photo/2018/05/02/12/02/linkedin-3368467_1280.jpg' />
        </div>
        
      </div>
    </div>
  )
}

export default Contact