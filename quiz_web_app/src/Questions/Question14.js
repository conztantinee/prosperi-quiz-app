import React, {useState} from 'react'
import styled from 'styled-components'
import Microsoft from '../assets/companies/microsoft.svg'
import Netflix from '../assets/companies/netflix.svg'
import Apple from '../assets/companies/apple.svg'
import Tesla from '../assets/companies/tesla.svg'
import Shell from '../assets/companies/shell.svg'
import Bitcoin from '../assets/companies/bitcoin.svg'
import Amazon from '../assets/companies/amazon.svg'
import Mak from '../assets/companies/mcdonalds.svg'
import Google from '../assets/companies/google.svg'
import Exxon from '../assets/companies/exxon.svg'
import Pfizer from '../assets/companies/pfizer.svg'

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
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
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
justify-content: center;
flex-wrap: wrap;
display: flex;
`;

const ButtonReal=styled.button`
transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 1rem;
    padding-right: 1rem;
     border-radius: 9999px;
    cursor: pointer;
    border: none;
    align-items: center;
    display: flex;
`;

const ButtonText=styled.span`
transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 8px;
`;

const ButtonImage=styled.div`
background-position: 50%;
background-size: cover;
width: 1.5rem;
height: 1.5rem;
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

const BottomWrapper=styled.div`
padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    flex-direction: column;
    display: flex;
`;

const BottomButton=styled.button`
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

const BottomText=styled.span`
--tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
`;

function Question14(props) {
    const [clicked, setClicked] = useState(false);
    const handleNext11 = () => {
        setClicked(!clicked);
      }
    const handleNext = () => {
        props.onNext();
      };
      const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);
    const [clicked7, setClicked7] = useState(false);
    const [clicked8, setClicked8] = useState(false);
    const [clicked9, setClicked9] = useState(false);
    const [clicked10, setClicked10] = useState(false);
    const handleNext1 = () => {
        setClicked1(!clicked1);   
      };
      const handleNext2 = () => {
        setClicked2(!clicked2);
      };
      const handleNext3 = () => {
        setClicked3(!clicked3);
      };
    
    const handleNext4 = () => {
        setClicked4(!clicked4);
      };
      const handleNext5 = () => {
        setClicked5(!clicked5);
      };
      const handleNext6 = () => {
        setClicked6(!clicked6);
      };
    const handleNext7 = () => {
        setClicked7(!clicked7);
      };
      const handleNext8 = () => {
        setClicked8(!clicked8);
      };
      const handleNext9 = () => {
        setClicked9(!clicked9);
      };
      const handleNext10 = () => {
        setClicked10(!clicked10);
      };
  return (
    
    <Container>
        <Frame>
            <Wrapper>
                <TextWrapper>
                    <TextHeader>Choose companies or assets you are excited about</TextHeader>
                </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                        <ButtonImage style={{backgroundImage: `url(${Microsoft})`}}/>
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>Microsoft</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                    <ButtonImage style={{backgroundImage: `url(${Netflix})`}}/>
                    <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Netflix</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                    <ButtonImage style={{backgroundImage: `url(${Apple})`}}/>
                    <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>Apple</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4} >
                    <ButtonImage style={{backgroundImage: `url(${Tesla})`}}/>
                    <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>Tesla</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked5 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext5} >
                    <ButtonImage style={{backgroundImage: `url(${Shell})`}}/>
                    <ButtonText style={{color: clicked5 ?  '#FFFFFF' : '#24234C'}}>Shell</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked6 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext6} >
                    <ButtonImage style={{backgroundImage: `url(${Bitcoin})`}}/>
                    <ButtonText style={{color: clicked6 ?  '#FFFFFF' : '#24234C'}}>Bitcoin</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked7 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext7} >
                    <ButtonImage style={{backgroundImage: `url(${Amazon})`}}/>
                    <ButtonText style={{color: clicked7 ?  '#FFFFFF' : '#24234C'}}>Amazon</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked8 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext8} >
                    <ButtonImage style={{backgroundImage: `url(${Mak})`}}/>
                    <ButtonText style={{color: clicked8 ?  '#FFFFFF' : '#24234C'}}>McDonalds</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked9 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext9} >
                    <ButtonImage style={{backgroundImage: `url(${Google})`}}/>
                    <ButtonText style={{color: clicked9 ?  '#FFFFFF' : '#24234C'}}>Google</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked10 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext10} >
                    <ButtonImage style={{backgroundImage: `url(${Exxon})`}}/>
                    <ButtonText style={{color: clicked10 ?  '#FFFFFF' : '#24234C'}}>Exxon</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext11} >
                        <ButtonImage style={{backgroundImage: `url(${Pfizer})`}}/>
                    <ButtonText style={{color: clicked ?  '#FFFFFF' : '#24234C'}}>Pfizer</ButtonText>
                    </ButtonReal>
                </ButtonWrapper>
            </Wrapper>
        </Frame>
        <Bottom>
            <BottomWrapper>
                <BottomButton onClick={handleNext}>
                    <BottomText>Continue</BottomText>
                </BottomButton>
            </BottomWrapper>
        </Bottom>
    </Container>
    
  )
}

export default Question14
