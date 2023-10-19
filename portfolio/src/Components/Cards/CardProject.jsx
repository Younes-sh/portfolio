import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const CardProject = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [items , setItems] = useState([])
  const [isIcon , setIsIcon] = useState(false)
  const URL_DATA = process.env.REACT_APP_URL_API;

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
  height: 240px;
  margin: 20px 0;
 
  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }
`;
const Span = styled.span`
  height: 20px;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  width: 50px;
  position: absolute;
  margin: 90px 390px;
  z-index: 2;
  transform: rotate(40deg);
`;

  useEffect(() => {
    fetch(`${URL_DATA}/api/projects`)
      .then(res => res.json())
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Check if there are 'develop' or 'new' items in the data
    const Situation = items.map(item => item).filter((item) => item.situation);
    if(Situation  === 'develop' || Situation === 'new') {
      setIsIcon(true);
    }
    
  }, [items]);

  return (
    <div style={{ position: 'relative' }}>
        <ImageContainer>
          <img className='w-100' src={props.situation} />
        </ImageContainer>
   
      <Button
        className='mt-5 pt-5'
        style={{ border: 'none', background: 'none' }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <DIV className='box-shadow' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <img style={{ width: '100%', height: '240px', position: 'absolute' }} src={props.UrlImage} alt={props.title} />

          {isShown && (
            <div className='glasmorphism text-start px-3 py-3' style={{ width: '100%', position: 'absolute', marginTop: '90px' }}>
              <h3 className='text-start'>{props.title}</h3>
              <Span className='description' style={{ overflow: 'hidden' }}>
                {props.details}
              </Span>

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
