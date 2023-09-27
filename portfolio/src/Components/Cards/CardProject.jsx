import {useState} from 'react';

const CardProject = (props) => {
  const [isShown, setIsShown] = useState(false);


  return (
    <button style={{border:'none',background:'none'}}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className='box-shadow' style={{width:'400px' , height:'240px',position:'relative',display:'flex'}}>
        <img style={{width:'100%', height:'240px',position:'absolute'}} src={props.IMG} alt={props.title} />
        
        {isShown && (
        <div className='glasmorphism text-start px-3 py-3' style={{width:'100%',position:'absolute',marginTop:'90px'}}>
          <h3 className='text-start '>{props.title}Watchface</h3>
          <span className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat optio laboriosam. Error odio voluptatum </span>
        </div>
      )}
      </div>
    </button>
  )
}

export default CardProject;