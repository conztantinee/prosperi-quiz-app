import React from 'react'
import styled from 'styled-components'
import First from '../assets/income-source/1.png'
import Second from '../assets/income-source/2.png'
import Third from '../assets/income-source/3.png'
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
padding-top: 2rem;
padding-bottom: 2rem;
padding-right: 0.5rem;
padding-left: 0.5rem;
 border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-column: span 1/span 1;
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

const ButtonImage=styled.div`
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
width: 60px;
height: 60px;
`;

const ButtonReal2=styled.button`
padding: 1.25rem;
    border-radius: 0.5rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    grid-column: span 2/span 2;
    cursor: pointer;
    border: none;
`;

const ButtonImage2=styled.div`
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
width: 2.25rem;
height: 2.25rem;
`;

function Question4(props) {
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
                    <TextHeader>What is your current income source</TextHeader>
                </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext1} >                       
                        <ButtonImage style={{backgroundImage: `url(${First})`}}/>
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>9 to 5 job</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext2} >                       
                        <ButtonImage style={{backgroundImage: `url(${Second})`}}/>
                        <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Passive income from investing</ButtonText>
                    </ButtonReal>
                    <ButtonReal2 style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext3}>
                        <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>Other</ButtonText>
                        <ButtonImage2 style={{backgroundImage: `url(${Third})`}}/>
                    </ButtonReal2>
                </ButtonWrapper>
            </Wrapper>
        </Frame>
    </Container>
  
  )
}

export default Question4
