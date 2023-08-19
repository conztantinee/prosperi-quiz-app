import React from 'react'
import styled from 'styled-components'
import I from './assets/icons/arrow-left.svg'
import L from './assets/logo.svg'

const Container=styled.div`
padding-bottom: 1rem;
padding-top: 22px;
`;

const Wrapper=styled.div`
justify-content: center;
display: flex;
position: relative;
`;

const IconContainer=styled.div`
cursor: pointer;
--tw-translate-y: -50%;
transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
top: 50%;
left: 1rem;
position: absolute;
`;

const Icon=styled.img`
color: transparent;
`;

const Logo=styled.img`
color: transparent;
`;

const NumberContainer=styled.div`
--tw-translate-y: -50%;
transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
right: 1rem;
top: 50%;
position: absolute;
`;

const NumberText=styled.div`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 600;
    font-size: .75rem;
    line-height: 1rem;
    font-family: system-ui;
`;

const PageNumber=styled.span`
--tw-text-opacity: 1;
    color: rgb(86 83 254/var(--tw-text-opacity));
`;

function QuizBar (props) {
    const {pageNumber}=props;
    const handleLast = () => {        
        props.onLast();       
      };
  return (
    <Container>
        <Wrapper>
            <IconContainer onClick={handleLast}>
                <Icon src={I} width={24} height={24}/>
            </IconContainer>
            <Logo alt="Prosperi" src={L} width={90} height={22} />
            <NumberContainer>
                <NumberText>
                    <PageNumber>{pageNumber} </PageNumber>
                    / 25
                </NumberText>
            </NumberContainer>
        </Wrapper>
    </Container>
  )
}

export default QuizBar