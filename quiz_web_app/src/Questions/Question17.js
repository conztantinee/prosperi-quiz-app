import React from 'react'
import styled from 'styled-components'
import Tup from '../assets/icons/thumb-up.png'
import Star from '../assets/icons/star-eyes.png'
import Eighteen from "../assets/age-picker/male/18-25.png"
import Twenties from "../assets/age-picker/male/26-35.png"
import Thirties from "../assets/age-picker/male/36-45.png"
import Old from "../assets/age-picker/male/46+.png"
import Eighteenf from "../assets/age-picker/female/18-25.png"
import Twentiesf from "../assets/age-picker/female/26-35.png"
import Thirtiesf from "../assets/age-picker/female/36-45.png"
import Oldf from "../assets/age-picker/female/46+.png"
import CircleBar from '../CircularProgBar'
import Counter from '../Counter'
import BarGraph from '../BarGraph'

const Container=styled.div`
padding-bottom: 104px;
`;

const Wrapper=styled.div`
padding-left: 1rem;
padding-right: 1rem;
`;

const HeaderWrapper=styled.div`
padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 0.75rem;
    flex-direction: column;
    display: flex;
`;

const HeaderTextBlack=styled.p`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const HeaderText=styled.span`
--tw-text-opacity: 1;
    color: rgb(86 83 254/var(--tw-text-opacity));
`;

const StatWrapper=styled.div`
padding-right: 1rem;
padding-left: 1rem;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
    border-color: #c4c7cc;
    border-width: 1px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border-image-width: 1;
    border-style: solid;
`;

const StatUp=styled.div`
justify-content: space-between;
display: flex;
`;

const UpContainer=styled.div`
flex-direction: column;
display: flex;
`;

const ButtonWrapper=styled.div`
max-width: 400px;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
bottom: 0;
position: fixed;
`;

const ButtonFrame=styled.div`
padding-top: 1.5rem;
padding-left: 1rem;
padding-bottom: 1.5rem;
padding-right: 1rem;
--tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    flex-direction: column;
    display: flex;
`;

const ButtonReal=styled.button`
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


const ButtonText=styled.span`
--tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const UpRightContainer=styled.div`
flex-direction: column;
flex: 1 1 0%;
display: flex;
`;

const MiddleWrapper=styled.div`
padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(238 238 255/var(--tw-bg-opacity));
    border-radius: 5px;
    gap: 0.5rem;
    display: flex;
`;

const ThumbUp=styled.div`
background-size: 24px;
background-position: 50%;
background-repeat: no-repeat;
min-width: 28px;
height: 28px;
`;

const RemarkWrapper=styled.div`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    gap: 0.25rem;
    flex-direction: column;
    display: flex;
`;

const RemarkHeader=styled.p`
font-weight: 700;
font-size: .75rem;
line-height: 1rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 0;
`;

const RemarkText=styled.p`
font-size: 10px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 0;
`;

const Result=styled.div`
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(86 83 254/var(--tw-bg-opacity));
    border-radius: 0.375rem;
    align-items: center;
    display: flex;
`;

const ResultText=styled.span`
    font-size: .75rem;
    line-height: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    font-weight: 500;
`;

const ResultIcon=styled.div`
margin-left: 2px;
width: 1.25rem;
height: 1.25rem;
background-repeat: no-repeat;
background-position: 50%;
background-size: 16px;
`;

const ImageContainer=styled.div`
background-repeat: no-repeat;
background-position: 50%;
background-size: contain;
flex: 1 1 0%;
position: relative;
`;

const ImageFade=styled.div`
    --tw-gradient-to: #fff;
    --tw-gradient-from: #ffffff00;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to);
    background-image: linear-gradient(to bottom,var(--tw-gradient-stops));
    width: 100%;
    height: 35%;
    bottom: 0;
    position: absolute;
`;

const ProgBarText=styled.p`
font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
      padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    max-width: 120px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ProgBarContainer=styled.div`
padding-left: 0.5rem;
padding-top: 1.25rem;
max-width: 133px;
height: 125px;
width: 125px;
`;

const ProgBarWrapper=styled.div`
height: 125px;
width: 125px;
position: relative;
`;

const ProgCount=styled.div`
text-align: center;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    border-radius: 0.5rem;
    width: 4rem;
    height: 3rem;
    top: 35px;
    left: 25px;
    position: absolute;
`;

const Req=styled.p`
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    font-size: 9px;
    white-space: nowrap;
    width: 100%;
    position: absolute;
    top: 45px;
    margin: 0;
`;

const SubjectContainer=styled.div`
padding-top: 0.25rem;
display: flex;
`;

const SubjectBox=styled.div`
//text-align: center;
gap: 1.5px;
flex-direction: column;
flex: 1 1 0%;
display: flex;
`;

const SubjectName=styled.p`
-tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    margin: 0;
`;

const SubjectResult=styled.p`
-tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 9px;
    margin: 0;
`;


function Question17(props) {
    const handleNext = () => {
        props.onNext();
      };
    let a;
    if(props.data===11){
        a=Eighteen;
    }
    else if(props.data===12){
        a=Twenties;
    }
    else if(props.data===13){
        a=Thirties;
    } 
    else if(props.data===14){
        a=Old;
    } 
    else if(props.data===21){
        a=Eighteenf;
    } 
    else if(props.data===22){
        a=Twentiesf;
    } 
    else if(props.data===23){
        a=Thirtiesf;
    } 
    else if(props.data===24){
        a=Oldf;
    } 
  return (
   
    <Container>
        <Wrapper>
            <HeaderWrapper>
                <HeaderTextBlack>
                    Summary of your 
                    <HeaderText> Wealth-Growth </HeaderText> profile
                </HeaderTextBlack>
                <StatWrapper>
                    <StatUp>
                        <UpContainer>
                            <ProgBarText>Readiness score</ProgBarText>
                            <ProgBarContainer>
                                <ProgBarWrapper>
                                    <CircleBar percentage={80.8} duration={20}/>
                                    <ProgCount>
                                        <Counter duration={2500}/>
                                        <Req>Required - 75</Req>
                                    </ProgCount>
                                </ProgBarWrapper>
                            </ProgBarContainer>
                        </UpContainer>
                        <UpContainer>
                            <UpRightContainer>
                                <Result>
                                    <ResultText>Result: Perfect</ResultText>
                                    <ResultIcon style={{backgroundImage: `url(${Star})`}} />
                                </Result>
                                <ImageContainer style={{backgroundImage: `url(${a})`}}>
                                    <ImageFade/>
                                </ImageContainer>
                            </UpRightContainer>
                        </UpContainer>
                    </StatUp> 
                             
                    <BarGraph scores={[8.7, 8.5, 6.7, 5]} duration={2000} />
                    
                    <SubjectContainer>
                        <SubjectBox>
                            <SubjectName>MINDSET</SubjectName>
                            <SubjectResult>Crypto invester</SubjectResult>
                        </SubjectBox>
                        <SubjectBox>
                            <SubjectName>MOTIVATION</SubjectName>
                            <SubjectResult>High</SubjectResult></SubjectBox>
                        <SubjectBox>
                            <SubjectName>INCOME</SubjectName>
                            <SubjectResult>Fit for crypto</SubjectResult></SubjectBox>
                        <SubjectBox>
                            <SubjectName>KNOWLEDGE</SubjectName>
                            <SubjectResult>Beginner</SubjectResult></SubjectBox>
                    </SubjectContainer>
                </StatWrapper>
            </HeaderWrapper>
            <MiddleWrapper>
                <ThumbUp style={{backgroundImage: `url(${Tup})`}} />
                <RemarkWrapper>
                    <RemarkHeader>Impressive score to succeed in investing</RemarkHeader>
                    <RemarkText>Over the past 10 years, average stock market annual return was 14.7%. You also can benefit from investing in stock market.</RemarkText>
                </RemarkWrapper>
            </MiddleWrapper>
            <ButtonWrapper>
                <ButtonFrame>
                    <ButtonReal onClick={handleNext}>
                        <ButtonText>Continue</ButtonText>
                    </ButtonReal>
                </ButtonFrame>
            </ButtonWrapper>
        </Wrapper>
    </Container>
    
  )
}

export default Question17
