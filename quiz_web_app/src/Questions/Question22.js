import React from 'react'
import styled from 'styled-components'
import PlanDesign from '../PlanDesign';
import Star from '../assets/magic/star.svg';


const Wrapper=styled.div`
justify-content: space-between;
padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    height: 100%;
    display: flex;
    `;

const UpText=styled.div`
line-height: 1.5;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
 font-size: 1.5rem;
    font-weight: 700;   
    margin-top: 2rem;
    margin-bottom: 2rem;
`;    

const Bottom=styled.div`
flex-direction: column;
display: flex;
max-width: 400px;
position: absolute;
margin-left: auto;
margin-right: auto;
right: 0;
left: 0;
bottom: 0;
justify-content: space-between;
`;

const StarContainer=styled.div`
justify-content: center;
width: 100%;
display: flex;
`;

const Stars=styled.img`
margin-left: 4px;
    margin-right: 4px;
`;

const Lie=styled.p`
font-weight: 700;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.125rem;
    line-height: 1.75rem;
text-align: center;
margin-top: 0.5rem;
margin-bottom: 1rem;
`;

const Question22 = (props) => {
  const handleNext = () => {
    props.onNext();
  };
  return (
    <Wrapper>
      <div>
        <UpText>We are designing your <br/> wealth growth plan...</UpText>
         <PlanDesign onNext={handleNext} /></div>
      <Bottom>
          <StarContainer>
            <Stars src={Star} width={21} height={21}/>
            <Stars src={Star} width={21} height={21}/>
            <Stars src={Star} width={21} height={21}/>
            <Stars src={Star} width={21} height={21}/>
            <Stars src={Star} width={21} height={21}/>
          </StarContainer>
      <Lie>1.4M+ people choose us</Lie>
      </Bottom>
    </Wrapper>
  )
}

export default Question22