import React from 'react'
import styled from 'styled-components'
import First from '../assets/retirement/male/18-25/background.png'
import FirstF from '../assets/retirement/female/18-25/background.png'
import Second from '../assets/retirement/male/26-35/background.png'
import SecondF from '../assets/retirement/female/26-35/background.png'
import Third from '../assets/retirement/male/36-45/background.png'
import ThirdF from '../assets/retirement/female/36-45/background.png'
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
flex-direction: column;
display: flex;
`;

const ButtonReal=styled.button`
padding: 1.25rem;
 border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    
--tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
`;

const ButtonText=styled.span`

font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


const ContentWrapper=styled.div`
gap: 0.5rem;
grid-template-columns: repeat(2,minmax(0,1fr));
display: grid;

`;

const Image=styled.div`
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
height: 100%;
position: relative;
`;

const Fade=styled.div`
--tw-gradient-to: #fff;
--tw-gradient-stops: var(--tw-gradient-from),#fff,var(--tw-gradient-to);
--tw-gradient-from: transparent;
background-image: linear-gradient(to bottom,var(--tw-gradient-stops));
height: 20%;
right: 0;
left: 0;
bottom: 0;
position: absolute;
`;

function Question10(props) {
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
                    <TextHeader>Do you plan your retirement?</TextHeader>
                </TextWrapper>
                <ContentWrapper>
                    <Image style={{backgroundImage: `url(${a})`}}>
                        <Fade/>
                    </Image>
                    <ButtonWrapper>
                        <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                            <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>I don't plan retirement, but I want to</ButtonText>
                        </ButtonReal>
                        <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                            <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>I constantly saving money for retirement</ButtonText>
                        </ButtonReal>
                        <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                            <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>I use pension fund for retirement</ButtonText>
                        </ButtonReal>
                    </ButtonWrapper>
                </ContentWrapper>
            </Wrapper>
        </Frame>
    </Container>
   
  )
}

export default Question10
