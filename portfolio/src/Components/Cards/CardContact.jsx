import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CardContact = ({title,IMG,description,link}) => {

  const Div = styled.div`
    width:400px;
    height:270px;
    margin:10px;

    @media (max-width: 768px) {
      width:280px;
    }
  `
  return (
    <Div  className='CardContact borderRadius position-relative text-light  '>
        <div className='w-100 h-100 position-absolute   Test'></div>
        <div className='w-100 position-absolute zIndex-4 text-start '>
            <div className='w-100' style={{height:'200px'}}>
                <img className='w-100 h-100 borderRadiusImae '  src={IMG} alt={title} />
            </div>
            <div className='px-4 '>
                <Link style={{textDecoration:'none'}} target='_blank' to={link}>{title}</Link>
                <p className='text-dark'>{description}</p>
            </div>
        </div>
    </Div>
  )
}

export default CardContact