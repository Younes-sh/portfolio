import {Link , NavLink} from 'react-router-dom';
import styled from 'styled-components';

const UL = styled.ul`
    width: 100%;
    height: 70px;
    display: flex;
    list-style-type: none;
    background: #012439;
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9000;

    li {
        padding : 10px ;

        a {
            color: #fff;
            text-decoration: none;
            font-size: 1.3rem;
        }

        .active {
            color:#84ca42 !important;
            border-bottom: solid .2rem;
            border-top: solid .2rem;
        }
    }
`



const Menu = () => {
  return (
    <>
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
    </>
  )
}

export default Menu