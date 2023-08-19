import React from 'react'
import styled from 'styled-components'
import One from '../assets/debt/1.png'
import Two from '../assets/debt/2.png'
import Three from '../assets/debt/3.png'
import Four from '../assets/debt/4.png'
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

const TextParagraph=styled.p`
font-weight: 500;
font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ButtonWrapper=styled.div`
flex-direction: column;
display: flex;
`;

const ButtonReal=styled.button`
padding-left: 1.25rem;
padding-right: 1.25rem;
border-radius: 0.5rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    cursor: pointer;
    border: none;
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
`;

const ButtonText=styled.span`
font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ButtonImage=styled.div`
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
width: 94px;
height: 94px;
`;

const ButtonReal2=styled.button`
padding-left: 1.25rem;
padding-right: 2.5rem;
    border-radius: 0.5rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    cursor: pointer;
    border: none;
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
`;

function Question8(props) {
    const [clicked, setClicked] = useState(false);
    const handleNext = () => {
        setClicked(!clicked);
        props.onNext();
      };
      const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
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
      const handleNext4 = () => {
        setClicked4(!clicked4);
        setTimeout(() => {  
        props.onNext();
        }, 300);
      };
  return (
    <Container>
        <Frame>
            <Wrapper>
                <TextWrapper>
                    <TextHeader>What is your largest debt?</TextHeader>
                    <TextParagraph>Please specify the debt type.</TextParagraph>
                </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>Mortgage</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${One})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                        <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Auto loan</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${Two})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                        <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>Student loan</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${Three})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4} >
                        <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>Credit card debt</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${Four})`}}/>
                    </ButtonReal>
                    <ButtonReal2 style={{backgroundColor: clicked ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext} clicked={clicked}>
                        <ButtonText style={{color: clicked ?  '#FFFFFF' : '#24234C'}}>I don't have any debts</ButtonText>
                        <ButtonImage/>
                    </ButtonReal2>
                </ButtonWrapper>
            </Wrapper>
        </Frame>
    </Container>

  )
}

export default Question8
