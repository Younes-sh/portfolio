import React from 'react';
import './main.css';
const Video = 'https://streamable.com/qvbffu';
const MainTwo = () => {
  return (
    <div className='MainTwo stickyPosition'>
        <video  autoPlay  loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div class="text-box">
        <h1>SEO</h1>
        </div>
    </div>
  )
}

export default MainTwo