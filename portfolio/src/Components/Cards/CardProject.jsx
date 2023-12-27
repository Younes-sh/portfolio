import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GitHub = 'https://cdn4.iconfinder.com/data/icons/bettericons/354/github-512.png'

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
  position: relative;
  @media (max-width: 768px) {
    width: 280px;
    height:158px;
    margin: 0 auto;
  }
  
`;

const IMG = styled.img `
  width:50px;
  margin-top: 100px;
  right:0;
  position:absolute;
  z-index: 9;
  transform:rotate(30deg);
  @media (max-width: 768px) {
    width: 28px;
    margin-top: 90px;
    right:-17px;
  }
`

const InfoHover = styled.div `
width: 100%;  
height: 60%;
  transition: height 1s ease-out;
  opacity: 1;
  bottom: 0;
  position: absolute;

  @media (max-width: 768px) {
    height: 88%;
  }
`


  return (
    <div style={{ position: 'relative' }}  >
      <IMG  src={props.situation} alt="" />
      <Button
        className='mt-5 pt-5'
        style={{ border: 'none', background: 'none' }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <DIV className='box-shadow' >
          <img style={{width:'100%'}} src={props.UrlImage} alt={props.title} />

          {isShown && (
            <InfoHover className='glasmorphism text-start' >
              <h3 className='text-start Capsmall'>{props.title}</h3>
              <span>
                {props.details}
              </span>

              <div className='d-flex justify-content-between pt-2'>
                <Link to={`/projectparams/${props._id}`} className=' btn btn-info  px-4'>
                  more
                </Link>
                {/* <Link to={props.github} className=' btn btn-dark'><img src={GitHub} alt="Github" style={{width:'20px',backgroundColorcolor:'#fff'}} /> Github</Link> */}
                <Link target='_blank' to={props.directLink} className=' btn btn-success d-none d-md-block'>
                  View site
                </Link>
              </div>
            </InfoHover>
          )}
        </DIV>
      </Button>
    </div>
  );
};

export default CardProject;
