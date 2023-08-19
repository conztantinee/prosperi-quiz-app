import React, {useState} from 'react'
import styled from 'styled-components'

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
`;

const ButtonText=styled.span`
transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

function Question13(props) {
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
    const handleNext = () => {
        props.onNext();
      };
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
                    <TextHeader>Choose topics you are interested in</TextHeader>
                    </TextWrapper>
                <ButtonWrapper>
                    <ButtonReal style={{backgroundColor: clicked1 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext1} >
                        <ButtonText style={{color: clicked1 ?  '#FFFFFF' : '#24234C'}}>Investing</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked2 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext2} >
                    <ButtonText style={{color: clicked2 ?  '#FFFFFF' : '#24234C'}}>Stocks</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked3 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext3} >
                    <ButtonText style={{color: clicked3 ?  '#FFFFFF' : '#24234C'}}>Crypto</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked4 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext4} >
                    <ButtonText style={{color: clicked4 ?  '#FFFFFF' : '#24234C'}}>Debt management</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked5 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext5} >
                    <ButtonText style={{color: clicked5 ?  '#FFFFFF' : '#24234C'}}>Business</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked6 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext6} >
                    <ButtonText style={{color: clicked6 ?  '#FFFFFF' : '#24234C'}}>Forex trading</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked7 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext7} >
                    <ButtonText style={{color: clicked7 ?  '#FFFFFF' : '#24234C'}}>Financial literacy</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked8 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext8} >
                    <ButtonText style={{color: clicked8 ?  '#FFFFFF' : '#24234C'}}>Passive income</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked9 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext9} >
                    <ButtonText style={{color: clicked9 ?  '#FFFFFF' : '#24234C'}}>Real estate</ButtonText>
                    </ButtonReal>
                    <ButtonReal style={{backgroundColor: clicked10 ?  '#5653FE' : '#F5F5F5'}} onClick={handleNext10} >
                    <ButtonText style={{color: clicked10 ?  '#FFFFFF' : '#24234C'}}>Entrepreneurship</ButtonText>
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

export default Question13
