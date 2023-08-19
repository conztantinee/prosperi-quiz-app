import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
opacity: 1;
`;

const Wrapper=styled.div`
padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`;

const Bottom=styled.div`
max-width: 400px;
margin-left: auto;
margin-right: auto;
right: 0;
left: 0;
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

const SecondButton=styled.button`
margin-top: 12px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-transform: uppercase;
font-weight: 600;
font-size: .875rem;
    line-height: 1.25rem;
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    cursor: pointer;
    border: none;
    background-color: #FFF;
`;

const HeaderText=styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0;
`;

const HeaderPurple=styled.span`
--tw-text-opacity: 1;
    color: rgb(86 83 254/var(--tw-text-opacity));
`;

const Question24 = (props) => {
    const handleNext = () => {
        props.onNext();
      };
  return (
    <>
    <Container>
        <Wrapper>
        <div>
            <HeaderText>Do you want to receive emails with  <HeaderPurple>Wealth-Growth</HeaderPurple> tips and product updates? </HeaderText>
        </div>
        </Wrapper>
    </Container>
    <Bottom>
        <ButtonFrame>
            <ButtonReal onClick={handleNext}>
                <ButtonText>yes, i'm in!</ButtonText>
            </ButtonReal>
            <SecondButton onClick={handleNext}>i don't want to receive tips or updates</SecondButton>
        </ButtonFrame>
    </Bottom>
    </>
  )
}

export default Question24