import React from 'react'
import styled from 'styled-components'
import One from '../assets/accumulate/male/1.png'
import Two from '../assets/accumulate/male/2.png'
import Three from '../assets/accumulate/male/3.png'
import Four from '../assets/accumulate/male/4.png'
import Five from '../assets/accumulate/male/5.png'
import Onef from '../assets/accumulate/female/1.png'
import Twof from '../assets/accumulate/female/2.png'
import Threef from '../assets/accumulate/female/3.png'
import Fourf from '../assets/accumulate/female/4.png'
import Fivef from '../assets/accumulate/female/5.png'
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

function Question18(props) {
    const [clicked, setClicked] = useState(false);
    const handleNext = () => {
        setClicked(!clicked);
        props.onNext();
      };
      const [clicked5, setClicked5] = useState(false);
    const handleNext5 = () => {
        setClicked5(!clicked5);
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
      let a,b,c,d,e;
  if(props.data===11||props.data===12||props.data===13||props.data===14){
    a=One;
    b=Two;
    c=Three;
    d=Four;
    e=Five;
  }
  else if(props.data===21||props.data===22||props.data===23||props.data===24){
    a=Onef;
    b=Twof;
    c=Threef;
    d=Fourf;
    e=Fivef;
  }
  return (


    <Container>
        <Frame>
            <Wrapper>
                <TextWrapper>
                    <TextHeader>Is there something special you want to accumulate money for?</TextHeader>
                    <TextParagraph>You're more likely to reach your goal if you have something important to aim for</TextParagraph>
                </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>Buy a house</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${a})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                        <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Wedding</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${b})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                        <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>Vacation</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${c})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4} >
                        <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>Buy a car</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${d})`}}/>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked5 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext5} >
                        <ButtonText style={{color: clicked5 ?  '#FFFFFF' : '#24234C'}}>Retirement</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${e})`}}/>
                    </ButtonReal>
                    <ButtonReal2 style={{backgroundColor: clicked ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext} >
                        <ButtonText style={{color: clicked ?  '#FFFFFF' : '#24234C'}}>Other</ButtonText>
                        <ButtonImage/>
                    </ButtonReal2>
                </ButtonWrapper>
            </Wrapper>
        </Frame>
    </Container>
    
  )
}

export default Question18
