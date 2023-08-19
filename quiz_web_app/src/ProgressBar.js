import React from 'react'
import styled from 'styled-components'
import D from './assets/icons/progress-divider.svg'
import { useState, useEffect } from 'react';

const Wrapper=styled.div`
padding-top: 0.25rem;
padding-bottom: 0.25rem;
padding-left: 1rem;
padding-right: 1rem;
`;

const Container=styled.div`
overflow: hidden;
border-radius: 16px;
--tw-bg-opacity: 1;
    background-color: rgb(229 231 235/var(--tw-bg-opacity));
    position: relative;
`;

const Prog=styled.div`
transition-timing-function: cubic-bezier(.4,0,.2,1);
 transition:  width 0.4s ease-in-out;
--tw-bg-opacity: 1;
background-color: rgb(86 83 254/var(--tw-bg-opacity));
height: 6px`;

const CP1=styled.img`
color: transparent;
transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
--tw-translate-x: -50%;
left: 33.333333%;
top: 0;
position: absolute;
`;

const CP2=styled.img`
color: transparent;
transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
--tw-translate-x: -50%;
right: 33.333333%;
top: 0;
position: absolute;
`;

function ProgressBar(props) {
    const {pageNumber}=props;
    const [progress, setProgress] = useState(0);
    useEffect(()=>{setProgress(pageNumber*4);}, [pageNumber]);
    
  return (
    <Wrapper>
        <Container>
        <CP1 src={D} width={8} height={6} />
        <Prog style={{width: `${progress}%`}}/>
        <CP2 src={D} width={8} height={6}/>
        </Container>
    </Wrapper>  )
}

export default ProgressBar