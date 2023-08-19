import React from 'react'
import styled from 'styled-components'
import P from '../assets/projection.png'
import { Link } from 'react-router-dom';

const Container=styled.div`
opacity: 1;
`;

const Wrapper=styled.div`
padding-left: 1rem;
padding-right: 1rem;
`;

const ButtonWrapper=styled.div`
max-width: 400px;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
bottom: 0;
position: fixed;
`;

const ButtonFrame=styled.div`
padding-top: 1.5rem;
padding-left: 1rem;
padding-bottom: 1.5rem;
padding-right: 1rem;
--tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    flex-direction: column;
    display: flex;
`;

const ButtonReal=styled.button`
transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    padding: 1rem;
    --tw-bg-opacity: 1;
    background-color: rgb(86 83 254/var(--tw-bg-opacity));
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;
    border: none;
`;


const ButtonText=styled.span`
--tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const Projection=styled.img`
position: relative;
background-position: bottom;
background-repeat: no-repeat;
background-size: cover;
max-width: 400px;
padding: 0;
`;

const HeaderText=styled.h1`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MiddleWrapper=styled.div`
margin-top: 24px;
padding-top: 2.25rem;
`;

const MiddleText=styled.h3`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


const Question25 = (props) => {
  return (
    <>
    <Container>
        <Wrapper>
        <div>
            <HeaderText>Your 4-week Wealth Growth Plan is ready!</HeaderText>
        </div>
        <MiddleWrapper>
            <MiddleText>Your wealth growth skills level</MiddleText>
            <div style={{marginTop: '28px'}} >
            <Projection src={P} width={368} height={247} />
            </div>
        </MiddleWrapper>
        </Wrapper>
    </Container>

    <ButtonWrapper>
        
    <Link to={`/sellingpage`} state={{data: props.data}} style={{ textDecoration: 'none' }}>  
        <ButtonFrame> 
            <ButtonReal>
                <ButtonText>Continue</ButtonText>
            </ButtonReal>          
        </ButtonFrame> 
        </Link>     
    </ButtonWrapper>
    </>
  )
}

export default Question25