import React from 'react'
import styled from 'styled-components'
import FirstPic from '../assets/saving-money/1.png'
import SecondPic from '../assets/saving-money/2.png'
import ThirdPic from '../assets/saving-money/3.png'
import FourthPic from '../assets/saving-money/4.png'
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
gap: 1rem;
grid-template-columns: repeat(2,minmax(0,1fr));
display: grid;
`;

const ButtonReal=styled.button`
padding-top: 1.75rem;
padding-bottom: 1.75rem;
padding-left: 0.5rem;
padding-right: 0.5rem;
border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ButtonImage=styled.div`
background-position: bottom;
background-repeat: no-repeat;
background-size: cover;
background-size: 90%;
height: 60px;
width: 60px;
`;

function Question11(props) {
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
                    <TextHeader>Do you have a habit of saving money</TextHeader>
                </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                        <ButtonImage style={{backgroundImage: `url(${FirstPic})`}}/>
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>I don't save money</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                        <ButtonImage style={{backgroundImage: `url(${SecondPic})`}}/>
                        <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>I want to save money, but I can't</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                        <ButtonImage style={{backgroundImage: `url(${ThirdPic})`}}/>
                        <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>I save money sometimes</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4} >
                        <ButtonImage style={{backgroundImage: `url(${FourthPic})`}}/>
                        <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>I try to save money all the time</ButtonText>
                    </ButtonReal>
                </ButtonWrapper>
            </Wrapper>
        </Frame>
    </Container>
   
  )
}

export default Question11
