import React from 'react'
import styled from 'styled-components'
import First from '../assets/credit-card/male/18-25/background.png'
import FirstF from '../assets/credit-card/female/18-25/background.png'
import Second from '../assets/credit-card/male/26-35/background.png'
import SecondF from '../assets/credit-card/female/26-35/background.png'
import Third from '../assets/credit-card/male/36-45/background.png'
import ThirdF from '../assets/credit-card/female/36-45/background.png'
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
padding: 1.25rem;
  border-radius: 0.5rem;
    cursor: pointer;
    border: none;
`;

const ButtonText=styled.span`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Image=styled.div`
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
height: 300px;
`;

function Question7(props) {
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
      let a;
      if(props.data===11){
          a=First;
      }
      else if(props.data===12||props.data===14)
      {
          a=Second;
      }
      if(props.data===13){
          a=Third;
      }
      else if(props.data===21)
      {
          a=FirstF;
      }
      if(props.data===22||props.data===24){
          a=SecondF;
      }
      else if(props.data===23)
      {
          a=ThirdF;
      }
  return (

    <Container>
        <Frame>
            <Wrapper>
                <TextWrapper>
                    <TextHeader>How frequently you buy stuff with s credit card?</TextHeader>
                </TextWrapper>
                <ButtonWrapper>
                        <ButtonReal  style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext1}>
                            <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>Every day</ButtonText>
                        </ButtonReal>
                        <ButtonReal  style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext2}>
                            <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Once a week</ButtonText>
                        </ButtonReal>
                        <ButtonReal  style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext3}>
                            <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>1-4 times a month</ButtonText>
                        </ButtonReal>
                        <ButtonReal  style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext4}>
                            <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>I do not have a credit card</ButtonText>
                        </ButtonReal>
                </ButtonWrapper>
                <Image style={{backgroundImage: `url(${a})`}}/>
            </Wrapper>
        </Frame>
    </Container>

  )
}

export default Question7
