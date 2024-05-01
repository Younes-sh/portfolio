import {useState} from 'react';
import { MdDarkMode } from "react-icons/md";
import { HiOutlineSun } from "react-icons/hi";

import './DarkMode.css';

function DarkMode() {
  const [isTrue , setIsTrue] = useState(true);

  const DarkModeHandler = () => {
    if(isTrue == true) {
      console.log('خاموش');
      setIsTrue(false)
    }
    else if(isTrue == false) {
      console.log('روشن');
      setIsTrue(true)
    }
  }
  return (
    <div className='DarkMode'>
      <button onClick={DarkModeHandler} >
        {
          isTrue?   <MdDarkMode /> : <HiOutlineSun />
        }
      </button>
      
      
    </div>
  )
}

export default DarkMode