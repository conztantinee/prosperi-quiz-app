import React from 'react'
import styled from 'styled-components'
import FirstPic from '../assets/goal/male/18-25/1.png'
import SecondPic from '../assets/goal/male/18-25/2.png'
import ThirdPic from '../assets/goal/male/18-25/3.png'
import FourthPic from '../assets/goal/male/18-25/4.png'
import FirstPic2 from '../assets/goal/male/26-35/1.png'
import SecondPic2 from '../assets/goal/male/26-35/2.png'
import ThirdPic2 from '../assets/goal/male/26-35/3.png'
import FourthPic2 from '../assets/goal/male/26-35/4.png'
import FirstPic3 from '../assets/goal/male/36-45/1.png'
import SecondPic3 from '../assets/goal/male/36-45/2.png'
import ThirdPic3 from '../assets/goal/male/36-45/3.png'
import FourthPic3 from '../assets/goal/male/36-45/4.png'
import FirstPicF from '../assets/goal/female/18-25/1.png'
import SecondPicF from '../assets/goal/female/18-25/2.png'
import ThirdPicF from '../assets/goal/female/18-25/3.png'
import FourthPicF from '../assets/goal/female/18-25/4.png'
import FirstPicF2 from '../assets/goal/female/26-35/1.png'
import SecondPicF2 from '../assets/goal/female/26-35/2.png'
import ThirdPicF2 from '../assets/goal/female/26-35/3.png'
import FourthPicF2 from '../assets/goal/female/26-35/4.png'
import FirstPicF3 from '../assets/goal/female/36-45/1.png'
import SecondPicF3 from '../assets/goal/female/36-45/2.png'
import ThirdPicF3 from '../assets/goal/female/36-45/3.png'
import FourthPicF3 from '../assets/goal/female/36-45/4.png'

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
gap: 0.5rem;
grid-template-columns: repeat(2,minmax(0,1fr));
display: grid;
`;

const ButtonReal=styled.button`
padding-top: 1.5rem;
   border-radius: 0.5rem;
    justify-content: space-between;
    align-items: stretch;
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
height: 132px;
`;

function Question1(props) {
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
    let a,b,c,d;
    if(props.data===11){
      a=FirstPic;
      b=SecondPic;
      c=ThirdPic;
      d=FourthPic;
    }
    else if(props.data===12||props.data===14){
        a=FirstPic2;
        b=SecondPic2;
        c=ThirdPic2;
        d=FourthPic2;
      }
      else if(props.data===13){
        a=FirstPic3;
        b=SecondPic3;
        c=ThirdPic3;
        d=FourthPic3;
      }
    else if(props.data===21){
      a=FirstPicF;
      b=SecondPicF;
      c=ThirdPicF;
      d=FourthPicF;
    }
    else if(props.data===22||props.data===24){
        a=FirstPicF2;
        b=SecondPicF2;
        c=ThirdPicF2;
        d=FourthPicF2;
      }
      else if(props.data===23){
        a=FirstPicF3;
        b=SecondPicF3;
        c=ThirdPicF3;
        d=FourthPicF3;
      }
      
      
  return (

<>
    <Container>
        <Frame>
            <Wrapper>
                <TextWrapper>
                    <TextHeader>What is your goal?</TextHeader>
                    <TextParagraph>Please select your first priority.</TextParagraph>
                </TextWrapper>
                
                <ButtonWrapper>
                    
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5' }} onClick={handleNext1} >
                    
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>Grow Wealth</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${a})`}}/>
                        
                    </ButtonReal>                  
                    
                    <ButtonReal  style={{backgroundColor:  clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2}>
                    
                        <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Passive Income</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${b})`}}/>
                      
                    </ButtonReal>
                    
                    
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                    
                        <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>Financial Indepence</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${c})`}}/>
                      
                    </ButtonReal>                  
                    <ButtonReal style={{backgroundColor:  clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4}>
                   
                        <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>Other</ButtonText>
                        <ButtonImage style={{backgroundImage: `url(${d})`}}/>
                      
                    </ButtonReal>
                    
                </ButtonWrapper>
            </Wrapper>
        </Frame>
    </Container>
    </>
  )
}

export default Question1
