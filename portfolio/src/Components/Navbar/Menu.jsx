import {Link , NavLink} from 'react-router-dom';
import styled from 'styled-components';

const UL = styled.ul`
    display: flex;
    list-style-type: none;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 9000;

    li {
        padding : 10px ;

        a {
            color: #fff;
            text-decoration: none;
            font-size: 1.3rem;
        }

        .active {
            color:#426dca !important;
            border-bottom: solid .2rem;
            border-top: solid .2rem;
        }
    }
`



const Menu = () => {
  return (
    <div className='w-100 pt-4'>
        <UL>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' >About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' >Contact</NavLink>
            </li>
        </UL>
    </div>
  )
}

export default Menu