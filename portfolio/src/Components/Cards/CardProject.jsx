import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const CardProject = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [ heightAnimation, setHeightAnimation] = useState(0);
  const [ transition , setTransition] = useState(false);
  const [ paddingAnimation, setPaddingAnimation] = useState(0);
  // this UseStast  is visible content of InfoHover
  const [ visible, setVisible] = useState('hidden');
  // 
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
const InfoHover  = styled.div`
  width: 100%;
  padding: 10px;
  bottom: 0;
  position: absolute;
  background: rgb(16,38,38,.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  margin-top: -140px;
  color: #FDFFAB;
`


// Postion of the button information
const LinkInfoBtn = styled.div`
  width: 100%;
  padding: 0 20px 0 0;
  position:absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
`
// this hadnler is for Hover on the cards for visible info.
const HoverHandler = () => {
  setIsShown(true)
  setVisible('visible')
  setHeightAnimation('160px');
  setTransition('1s');
  setPaddingAnimation('5px 10px');
}

// This handler is for unvisible info of cards.
const leaveHandler = () => {
  setIsShown(false)
  setHeightAnimation('0')
  setVisible('hidden')
}

  return (
    <div style={{ position: 'relative' }}  >
      <IMG  src={props.situation} alt="" />
      <Button
        className='mt-5 pt-5'
        style={{ border: 'none', background: 'none' }}
        onMouseEnter={HoverHandler}
        onMouseLeave={leaveHandler}
      >
        <DIV className='box-shadow' >
          <img style={{width:'100%'}} src={props.UrlImage} alt={props.title} />
            { isShown && (
              <InfoHover className='text-start HoverInfo' style={{height:`${heightAnimation}`}}>
              <h3 style={{visibility:`${visible}`}}  className='text-start Capsmall'>{props.title}</h3>
              <span style={{visibility:`${visible}`}}  >
                {props.details}
              </span>

              <LinkInfoBtn className='pt-2'>
                <Link to={`/projectparams/${props._id}`} style={{visibility:`${visible}`}}  className='btn btn-info  px-4'>
                  more
                </Link>
                {/* ------------- */}

               
                    <Link target='_blank'to={props.directLink}
                      style={{visibility:`${visible}`}} className='btn btn-success'>
                      View site
                    </Link>
                
                
              </LinkInfoBtn>
            </InfoHover>
            )}
            
        </DIV>
      </Button>
    </div>
  );
};

export default CardProject;
