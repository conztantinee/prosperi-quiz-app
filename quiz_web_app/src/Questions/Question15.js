import React from 'react'
import styled from 'styled-components'
import Person from '../assets/icons/person.png'
import Tup from '../assets/icons/thumb-up.png'
import Tdown from '../assets/icons/thumb-down.png'
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
--tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const ButtonReal=styled.button`
padding: 0.5rem;
border-radius: 0.5rem;
    flex-direction: column;
    display: flex;
    cursor: pointer;
    border: none;
`;

const ButtonBigImage=styled.div`
background-repeat: no-repeat;
background-position: 50%;
background-size: 30px;
width: 45px;
height: 45px;
`;

const ButtonImage=styled.div`
background-repeat: no-repeat;
background-position: 50%;
background-size: 20px;
width: 45px;
height: 45px;
`;

const BottomWrapper=styled.div`
--tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-top: 24px;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const BottomLeftText=styled.span`
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    font-weight: 500;
    font-size: .75rem;
    line-height: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const BottomRightText=styled.span`--tw-text-opacity: 1;
color: rgb(107 114 128/var(--tw-text-opacity));
font-weight: 500;
font-size: .75rem;
line-height: 1rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: right;
`;

function Question15(props) {
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
                    <TextHeader>Rate your readiness to invest</TextHeader>
                </TextWrapper>
                <ButtonWrapper>
                <ButtonReal style={{backgroundColor: clicked ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext} >
                    <ButtonBigImage style={{backgroundImage: `url(${Tdown})`}}/>
                </ButtonReal>
                <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                    <ButtonImage style={{backgroundImage: `url(${Tdown})`}}/>
                </ButtonReal>
                <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                    <ButtonImage style={{backgroundImage: `url(${Person})`}}/>
                </ButtonReal>
                <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                    <ButtonImage style={{backgroundImage: `url(${Tup})`}}/>
                </ButtonReal>
                <ButtonReal style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4} >
                    <ButtonBigImage style={{backgroundImage: `url(${Tup})`}}/>
                </ButtonReal>
                </ButtonWrapper>
                <BottomWrapper>
                    <BottomLeftText>I need more information</BottomLeftText>
                    <BottomRightText>I am totally prepared</BottomRightText>
                </BottomWrapper>
            </Wrapper>
        </Frame>
    </Container>

)}

export default Question15 