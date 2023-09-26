import React from 'react';



const Card = (props) => {
    
  return (
    <div style={{width:'250px',marginTop:'10px'}}>
      <img style={{width:'250px', height:'250px'}} src={props.IMG} alt={props.title} />
      <h4>{props.title}</h4>
      <hr />
      <span>{props.text}</span>
    </div>
  )
}

export default Card