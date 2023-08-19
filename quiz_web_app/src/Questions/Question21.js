import React from 'react'
import styled from 'styled-components'
import P from '../assets/plan.png'

const Container=styled.div`
padding-bottom: 104px;
`;

const Wrapper=styled.div`
padding-left: 1rem;
padding-right: 1rem;
`;

const Up=styled.div`
opacity: 1;
`;

const UpWrapper=styled.div`
padding-top: 1.25rem;
padding-bottom: 1.25rem;
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

const ParagraphText=styled.p`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 500;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MiddleText=styled.p`
margin-top: 24px;
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
text-decoration-line: underline;
font-weight: 700;
text-align: center;
font-size: 1.125rem;
    line-height: 1.75rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

const Plan=styled.img`
position: relative;
margin-top: 24px;
background-position: bottom;
background-repeat: no-repeat;
background-size: cover;
max-width: 400px;
padding: 0;
`;

function Question21(props) {
    const handleNext = () => {
        props.onNext();
      };
  return (
    
    <Container>
        <Wrapper>
            <Up>
                <UpWrapper>
                    <div>
                        <HeaderText>Your personal plan to wealth growth</HeaderText>
                        <ParagraphText>Based on your answers, we expect you to gain necessary wealth growth skills of</ParagraphText>
                    </div>
                    <MiddleText>Confident investor by May, 2023</MiddleText>
                    <Plan src={P} width={368} height={247} />
                </UpWrapper>
            </Up>
            
            <ButtonWrapper>
                <ButtonFrame>
                    <ButtonReal onClick={handleNext}>
                        <ButtonText>Continue</ButtonText>
                    </ButtonReal>
                </ButtonFrame>
            </ButtonWrapper>
        </Wrapper>
    </Container>
   
  )
}

export default Question21
