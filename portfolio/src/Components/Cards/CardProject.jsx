import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CardProject = (props) => {
  const [isShown, setIsShown] = useState(false);
  const Button = styled.button`
    padding:0 5px;
    @media (max-width: 768px) {
      padding:0;
    }
  `

  const DIV = styled.div`
    width:400px;
    height:240px;
    margine:20px;
    background-color:red;
    hover:{
      scale: 1.25;
    }
    @media (max-width: 768px) {
      width:360px;
      margine:20px auto;
    }
    
  `
    const Span = styled.span`
      eight: 20px; 
      verflow: hidden;
    `
  return (
    <Button className='mt-5 pt-5 ' style={{border:'none',background:'none',margin:'auto'}}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <DIV className='box-shadow ' style={{ position:'relative',display:'flex'}}>
        <img style={{width:'100%', height:'240px',position:'absolute'}} src={props.UrlImage} alt={props.title} />
        
        {isShown && (
        <div className='glasmorphism text-start px-3 py-3' style={{width:'100%',position:'absolute',marginTop:'90px'}}>
          <h3 className='text-start '>{props.title}Watchface</h3>
          <Span className='description'style={{overflow:'hidden'}}>{props.details}</Span>

          <div className='d-flex justify-content-between pt-2'>
            <Link to={`/projectparams/${props._id}`}className='btn btn-info'>info</Link>
            <Link target='_blank' to={`${props.directLink}`} className='btn btn-success'>View site</Link>
          </div>
        </div>
      )}
      </DIV>
    </Button>
  )
}

export default CardProject;