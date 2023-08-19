import styled from "styled-components";
import React, {useEffect, useState} from "react";

const ProgressBarContainer = styled.div`
  position: relative;
  height: 43px;
  width: 368px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const ProgressTitle = styled.span`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const ProgressBar = styled.div`
  position: relative;
  height: 8px;
  background-color: #e7e9eb;
  margin-top: 8px;
  width: 368px;
  border-radius: 0.5rem;
`;

const Progress = styled.div`
  position: absolute;
  height: 8px;
  background-color: #8bc34a;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
 transition:  width 0.4s ease-in-out;
  border-radius: 0.5rem;
`;

const ProgressCount = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const ProgressTextWrapper=styled.div`
justify-content: space-between;
align-items: center;
display: flex;
position: relative;
`;

const ButtonContainer = styled.div`
  gap: 1rem;
  grid-template-columns: repeat(2,minmax(0,1fr));
  display: grid;
`;

const Button = styled.button`
  padding: 0.75rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  --tw-bg-opacity: 1;
    background-color: rgb(229 231 235/var(--tw-bg-opacity));
    border: none;
`;

const ButtonText=styled.span`
font-weight: 600;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: .875rem;
    line-height: 1.25rem;
`;

const Circle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #7abf4c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tick = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
`;

const DecisionBox=styled.div`
padding: 1rem;
--tw-bg-opacity: 1;
    background-color: rgb(245 245 245/var(--tw-bg-opacity));
        --tw-border-opacity: 1;
    border-color: rgb(196 199 204/var(--tw-border-opacity));
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
`;

const DecisionBoxHeader=styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    font-weight: 500;
    text-align: center;
    font-size: .875rem;
    line-height: 1.25rem;

`;

const DecisionBoxTitle=styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
`;

const BottomButtonWrapper=styled.div`
max-width: 400px;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
bottom: 100;
position: fixed;
`;

const BottomButtonFrame=styled.div`
padding-top: 1.5rem;
padding-left: 1rem;
padding-bottom: 1.5rem;
padding-right: 1rem;
--tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    flex-direction: column;
    display: flex;
`;

const BottomButtonReal=styled.button`
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


const BottomButtonText=styled.span`
--tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const Line=styled.div`
width: 100%;
height: 1px;
margin-top: 0.5rem;
--tw-bg-opacity: 1;
    background-color: rgb(229 231 235/var(--tw-bg-opacity));
    position: relative;
`;

function PlanDesign(props) {
    const [progress1, setProgress1] = useState(0);
    const [isRunning, setIsRunning]=useState(true);
    const [isRunning2, setIsRunning2]=useState(false);
    const [isRunning3, setIsRunning3]=useState(false);
    const [showButtons1, setShowButtons1] = useState(false);
    const [completed1, setCompleted1] = useState(false);
    const [progress2, setProgress2] = useState(0);
    const [showButtons2, setShowButtons2] = useState(false);
    const [completed2, setCompleted2] = useState(false);
    const [progress3, setProgress3] = useState(0);
    const [showButtons3, setShowButtons3] = useState(false);
    const [completed3, setCompleted3] = useState(false);
    const [showButton4, setShowButton4] = useState(false);
    const [Title1, setTitle1]=useState("Aligning with your goals");
    const [Title2, setTitle2]=useState("Setting skills to improve")
    const [Title3, setTitle3]=useState("Picking content")
  

    const handleNext = () => {
        props.onNext();
      };

    useEffect(() => {
        if( isRunning){
            setTimeout(()=>setProgress1(prev => prev+=1),50)
        }
        if (progress1 === 50) {
          setShowButtons1(true);
          setIsRunning(false);
        }
        if (progress1 === 100) {
          setCompleted1(true);
          setTitle1("Goals");
          setIsRunning(false);
          setIsRunning2(true);
        }
      }, [progress1, isRunning]);
    
      useEffect(() => {
        if( isRunning2){
            setTimeout(()=>setProgress2(prev => prev+=1),50)
        }
        if (progress2 === 50) {
          setShowButtons2(true);
          setIsRunning2(false);
        }
        if (progress2 === 100) {
          setCompleted2(true);
          setTitle2("Skills");
          setIsRunning2(false);
          setIsRunning3(true);
        }
      }, [progress2, isRunning2]);

      useEffect(() => {
        if( isRunning3){
            setTimeout(()=>setProgress3(prev => prev+=1),50)
        }
        if (progress3 === 50) {
          setShowButtons3(true);
          setIsRunning3(false);
        }
        if (progress3 === 100) {
          setCompleted3(true);
          setTitle3("Content");
          setShowButton4(true);
          setIsRunning3(false);
        }
      }, [progress3, isRunning3]);
    
      const handleButtonClick1 = () => {
        setShowButtons1(false);
        setIsRunning(true);
      };

      const handleButtonClick2 = () => {
        setShowButtons2(false);
        setIsRunning2(true);
      };
      const handleButtonClick3 = () => {
        setShowButtons3(false);
        setIsRunning3(true);
      };

      const handleProgressAnimationEnd1 = () => {
        if (progress1 === 100) {
          setCompleted1(true);
        }
      };
    
      const handleProgressAnimationEnd2 = () => {
        if (progress2 === 100) {
          setCompleted2(true);
        }
      };
    
      const handleProgressAnimationEnd3 = () => {
        if (progress3 === 100) {
          setCompleted3(true);
          setShowButton4(true);
        }
      };

  return (<>
    <ProgressBarContainer>
      <ProgressTextWrapper>
      <ProgressTitle>{Title1}</ProgressTitle>
      <ProgressCount>
        {completed1 ? (
          <Circle>
            <Tick />
          </Circle>
        ) : (
          `${progress1}%`
        )}
      </ProgressCount>
      </ProgressTextWrapper>
      {completed1 ? (<Line/>) : 
      ( <ProgressBar>
        <Progress
          style={{ width: `${progress1}%` }}
          onTransitionEnd={handleProgressAnimationEnd1}/>
      </ProgressBar>)  }
      {showButtons1 && (<DecisionBox>
        <DecisionBoxHeader>To move forward, specify</DecisionBoxHeader>
        <DecisionBoxTitle>Are you inclined to finish what you start</DecisionBoxTitle>
        <ButtonContainer>
          <Button onClick={handleButtonClick1}>
            <ButtonText>No</ButtonText>
          </Button>
          <Button onClick={handleButtonClick1}>
            <ButtonText>Yes</ButtonText></Button>
        </ButtonContainer>
        </DecisionBox>
      )}
      
    </ProgressBarContainer>

   {completed1 && <ProgressBarContainer>
      <ProgressTextWrapper>
      <ProgressTitle>{Title2}</ProgressTitle>
      <ProgressCount>
        {completed2 ? (
          <Circle>
            <Tick />
          </Circle>
        ) : (
          `${progress2}%`
        )}
      </ProgressCount>
      </ProgressTextWrapper>
      {completed2 ? (<Line/>) : 
      ( <ProgressBar>
        <Progress
          style={{ width: `${progress2}%` }}
          onTransitionEnd={handleProgressAnimationEnd2}/>
      </ProgressBar>)  }
      {showButtons2 && (<DecisionBox>
        <DecisionBoxHeader>To move forward, specify</DecisionBoxHeader>
        <DecisionBoxTitle>Are you familiar with investing and stock markets</DecisionBoxTitle>
        <ButtonContainer>
          <Button onClick={handleButtonClick2}>
            <ButtonText>No</ButtonText>
          </Button>
          <Button onClick={handleButtonClick2}>
            <ButtonText>Yes</ButtonText></Button>
        </ButtonContainer>
        </DecisionBox>
      )}
      
    </ProgressBarContainer> }

    {completed2 && <ProgressBarContainer>
      <ProgressTextWrapper>
      <ProgressTitle>{Title3}</ProgressTitle>
      <ProgressCount>
        {completed3 ? (
          <Circle>
            <Tick />
          </Circle>
        ) : (
          `${progress3}%`
        )}
      </ProgressCount>
      </ProgressTextWrapper>
      {completed3 ? (<Line/>) : 
      ( <ProgressBar>
        <Progress
          style={{ width: `${progress3}%` }}
          onTransitionEnd={handleProgressAnimationEnd3}/>
      </ProgressBar>)  }
      {showButtons3 && (<DecisionBox>
        <DecisionBoxHeader>To move forward, specify</DecisionBoxHeader>
        <DecisionBoxTitle>Are you willing to learn how to create passive income streams</DecisionBoxTitle>
        <ButtonContainer>
          <Button onClick={handleButtonClick3}>
            <ButtonText>No</ButtonText>
          </Button>
          <Button onClick={handleButtonClick3}>
            <ButtonText>Yes</ButtonText></Button>
        </ButtonContainer>
        </DecisionBox>
      )}
      
    </ProgressBarContainer>}

    {showButton4 &&
    <BottomButtonWrapper>
        <BottomButtonFrame>
            <BottomButtonReal onClick={handleNext}>
                <BottomButtonText>Continue</BottomButtonText>
            </BottomButtonReal>
        </BottomButtonFrame>
    </BottomButtonWrapper>
    }
    
    </>);
} export default PlanDesign;