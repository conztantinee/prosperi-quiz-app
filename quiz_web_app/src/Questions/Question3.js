import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Container=styled.div`
padding-left: 1rem;
padding-right: 1rem;
`;

const Frame=styled.div`
opacity: 1;
`;

const Wrapper=styled.div`
padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`;

const TextWrapper=styled.div`
--tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
`;

const TextHeader=styled.h1`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ButtonWrapper=styled.div`
gap: 0.5rem;
flex-direction: column;
display: flex;
--tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
`;

const ButtonReal=styled.button`
padding: 1.25rem;
border-radius: 0.5rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    cursor: pointer;
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
    border: none;
`;

const ButtonText=styled.span`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


function Question3(props) {
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const handleNext1 = () => {
        setClicked1(!clicked1);
        setTimeout(() => {  
        props.onNext();
        }, 300);
      };
      const handleNext2 = () => {
        setClicked2(!clicked2);
        setTimeout(() => {  
        props.onNext();
        }, 300);
      };
      const handleNext3 = () => {
        setClicked3(!clicked3);
        setTimeout(() => {  
        props.onNext();
        }, 300);
      };
  return (

    <Container>
        <Frame>
            <Wrapper>
                <TextWrapper>
                    <TextHeader>Annual income level you want to have</TextHeader>
                </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext1} >
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>$50,000 - $100,000</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext2} >
                        <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>$100,000 - $250,000</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext3} >
                        <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>More than $250,000</ButtonText>
                    </ButtonReal>
                </ButtonWrapper>
            </Wrapper>
        </Frame>
    </Container>
  )
}

export default Question3
