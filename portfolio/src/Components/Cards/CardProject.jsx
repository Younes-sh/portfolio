import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CardProject = (props) => {
  const [isShown, setIsShown] = useState(false);
  const Button = styled.button`
  margin:0 15px;
    @media (max-width: 768px) {
      width:95%;
      margin:auto;
      padding:0;
    }
  `

  const DIV = styled.div`
    width:400px;
    height:240px;
    margine:20px 0;
    hover:{
      scale: 1.25;
    }
    @media (max-width: 768px) {
      width:100%;
      margine:20px auto;
    }
    
  `
    const Span = styled.span`
      eight: 20px; 
      verflow: hidden;
    `
  return (
    <Button className='mt-5 pt-5' style={{border:'none',background:'none'}}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <DIV className='box-shadow ' style={{ position:'relative',display:'flex', justifyContent:'center'}}>
        <img style={{width:'100%', height:'240px',position:'absolute'}} src={props.UrlImage} alt={props.title} />
        
        {isShown && (
        <div className='glasmorphism text-start px-3 py-3' style={{width:'100%',position:'absolute',marginTop:'90px'}}>
          <h3 className='text-start '>{props.title}</h3>
          <Span className='description'style={{overflow:'hidden'}}>{props.details}</Span>

          <div className='d-flex justify-content-between pt-2'>
            <Link to={`/projectparams/${props._id}`}className='btn btn-info px-4'>more</Link>
            <Link target='_blank' to={`${props.directLink}`} className='btn btn-success'>View site</Link>
          </div>
        </div>
      )}
      </DIV>
    </Button>
  )
}

export default CardProject;