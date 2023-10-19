import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const CardProject = (props) => {
  const [isShown, setIsShown] = useState(false);

  const Button = styled.button`
  margin: 0 15px;
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
    padding: 0;
  }
`;
const DIV = styled.div`
  width: 400px;
  height: 225px;
  margin: 20px 0;
  background-color:red;
 
  @media (max-width: 768px) {
    width: 280px;
    height:158px;
    margin: 0 auto;
  }
`;



  return (
    <div style={{ position: 'relative' }}>
      <Button
        className='mt-5 pt-5'
        style={{ border: 'none', background: 'none' }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <DIV className='box-shadow' >
          <img style={{width:'100%'}} src={props.UrlImage} alt={props.title} />

          {isShown && (
            <div className='glasmorphism text-start  ' >
              <h3 className='text-start'>{props.title}</h3>
              <span>
                {props.details}
              </span>

              <div className='d-flex justify-content-between pt-2'>
                <Link to={`/projectparams/${props._id}`} className='btn btn-info px-4'>
                  more
                </Link>
                <Link target='_blank' to={props.directLink} className='btn btn-success'>
                  View site
                </Link>
              </div>
            </div>
          )}
        </DIV>
      </Button>
    </div>
  );
};

export default CardProject;
