import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import Bluearch from "./assets/person-button/blue-arch.svg"
import Greenarch from "./assets/person-button/green-arch.svg"
import Man from "./assets/gender-picker/male.png"
import Woman from "./assets/gender-picker/female.png"
import Chevron from "./assets/icons/chevron-right.svg"

const Wrapper=styled.div`
padding-left: 1rem;
    padding-right: 1rem;
`;

const Container=styled.div`
padding-top: 2rem;
--tw-space-y-reverse: 0;
margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))
`;

const Block=styled.div`
--tw-space-y-reverse: 0;
    margin-top: calc(.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(.5rem * var(--tw-space-y-reverse))
`;

const Header=styled.h1`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;
    font-family: system-ui;
`;

const MainText=styled.p`
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    font-family: system-ui;
`;

const Options=styled.div`
gap: 1rem;
grid-template-columns: repeat(2,minmax(0,1fr));
display: grid;
`;

const Gender=styled.div`
background-repeat: no-repeat;
background-position: bottom;
background-size: 125px;
justify-content: flex-end;
flex-direction: column;
cursor: pointer;
height: 185px;
display: flex;
position: relative;
`;

const Frame=styled.div`
background-repeat: no-repeat;
background-position: bottom;
background-size: 132px;
height: 100%;
`;

const Button1=styled.button`
padding: 0.75rem;
--tw-bg-opacity: 1;
    background-color: rgb(86 83 254/var(--tw-bg-opacity));
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    display: flex;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    cursor: pointer;
    border: none;
`;


const Button2=styled.button`
padding: 0.75rem;
--tw-bg-opacity: 1;
background-color: rgb(122 191 76/var(--tw-bg-opacity));
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    display: flex;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    cursor: pointer;
    border: none;
`;

const BText=styled.span`
--tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: system-ui;
`;

const Arrow=styled.div`
background-repeat: no-repeat;
background-position: 50%;
background-size: 24px;
width: 1.5rem;
height: 1.5rem;
`;


const Body = () => {
  return (
    <Wrapper>
        <Container>
            <Block>
                <Header>Let's Create Your Wealth Growth Plan</Header>
                <MainText>Select Your Gender:</MainText>
            </Block>
            <Options>
            <Link to="/age" state={{ data: 1 } } >
                <Gender style={{backgroundImage: `url(${Bluearch})`}}>                
                    <Frame style={{backgroundImage: `url(${Man})`}}>
                    
                       <Button1>
                            <BText>male</BText>
                            <Arrow style={{backgroundImage: `url(${Chevron})`}}/>
                        </Button1>
                     
                    </Frame>
                    
                </Gender></Link> 
                <Link to={`/age`} state={{ data: 2 } }>
                <Gender style={{backgroundImage: `url(${Greenarch})`}}>
                    <Frame style={{backgroundImage: `url(${Woman})`}}>
                    
                        <Button2>
                            <BText>female</BText>
                            <Arrow style={{backgroundImage: `url(${Chevron})`}}/>
                        </Button2>
                        
                    </Frame>
                </Gender>
                </Link>
            </Options>
        </Container>       
    </Wrapper>

    
  )
}

export default Body