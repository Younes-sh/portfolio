import React, { useState } from "react";
import Styled from "styled-components";

const ContainerBtn = Styled.div`
    width: 100%;
    padding: 10px ;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(19, 157, 200, 0.3) 0px 8px 24px;
    cursor: pointer;
    
    &:hover {
        background-color: rgb(236,129,6);
    }
`;
const AccordionDoor = Styled.div`
    width: 100%;
    border: 1px solid #ccc;
    color: #fff;
    border-radius: 0 0 7px 7px;
    transition: all 1s;
    p {
        text-align: justify;
    }
`;
const Span = Styled.span`
    background-color: transparent !important;
    color: #fff !important;
    border: none;
`;

const Title = Styled.h4`
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`
const Accordion = ({title, description}) => {
    const [isOpenAccordion, setIsOpenAccordion] = useState(false);

    const toggleAccordion = () => {
        setIsOpenAccordion(!isOpenAccordion);
    };

    return (
        <div className="w-75 m-auto mt-1">
            <ContainerBtn onClick={toggleAccordion} style={{background: isOpenAccordion? "green" : ""}}>
                <Title className="text-light">{title}</Title>
                <Span>{isOpenAccordion ? "close" : "open"}</Span>
            </ContainerBtn>
            <AccordionDoor style={{ height: isOpenAccordion ? "auto" : "0", overflow: "hidden" , padding: isOpenAccordion? "10px" : "0", background: isOpenAccordion? "#50623A": ""}}>
                <p style={{visibility: isOpenAccordion ? "visible" : "hidden"}}>
                    {description}
                </p>
            </AccordionDoor>
        </div>
    );
};

export default Accordion;
