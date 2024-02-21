import Styled from 'styled-components';
import Accordion from '../Accordion/Accordion';
import DataSecurity from '../Home/Main/DataSecurity.js';
import { useState } from 'react';

const ModalShow = Styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 10px;
    position: fixed;
    top: 7%;
    left: .1%;
    background-color: rgb(11,24,37);
    z-index: 1000;
    transform: translate;
    transition: 2s linear;
    // border: 1px solid green;
    border-radius: 5px;
`
const BtnClose = Styled.button`
    width: 25px;
    margin-top: 4px;
    border-radius: 50%;
    bacground: rgb(236,129,6);
    border: solid 1px #ccc;
`
const ParagraphText = Styled.p`
padding: 5px;
column-count: 3;
-webkit-column-count: 3;
-moz-column-count: 3;
column-gap: 40px;
-webkit-column-gap: 40px;
-moz-column-gap: 40px;
column-rule: 3px solid #000000;
-webkit-column-rule: 3px solid #000000;
-moz-column-rule: 3px solid #000000;
text-align: justify;


`
const Modal = ({
    // BtnClose
    closeHandler
}) => {
    // const [Datas , setDatas] = useState(DataSecurity)

  return (
    <ModalShow>
        <BtnClose
            onClick={closeHandler}
        >&#10007;</BtnClose>
        {
            DataSecurity.map(data => <Accordion key={data.index} {...data}/>)
        }
        
    </ModalShow>
  )
}

export default Modal