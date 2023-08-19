import React from 'react'
import styled from 'styled-components'
import L from './assets/logo.svg'
import B from "./assets/social-proof/male/background.png"
import BF from "./assets/social-proof/female/background.png"
import { Link, useLocation } from 'react-router-dom'

const Cover=styled.div`
padding-bottom: 104px;
max-width: 400px;
margin-left: auto;
margin-right: auto;`;

const Top=styled.div`
padding-top: 22px;
padding-bottom: 1rem;
`
const Container=styled.div`
justify-content: center;
display: flex;
position: relative;
`;

const Logo=styled.img`
color: transparent;
max-width: 100%;
height: auto;
display: block;
vertical-align: middle;
`;

const Body=styled.div`
padding-left: 1rem;
padding-right: 1rem;
`;

const Wrapper=styled.div`
--tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
`;

const Background=styled.div`
background-repeat: no-repeat;
background-position: 50%;
background-size: contain;
height: 330px;
width: 368px;
`;

const Rest=styled.div`
--tw-space-y-reverse: 0;
    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
`;

const Header=styled.h1`
--tw-text-opacity: 1;
    color: rgb(86 83 254/var(--tw-text-opacity));
    font-weight: 800;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
    font-family: system-ui;
`;

const Paragraph=styled.p`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    font-family: system-ui;
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

const Continue=styled.div`
padding-top: 1.5rem;
padding-bottom: 1.5rem;
padding-left: 1rem;
padding-right: 1rem;
--tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    flex-direction: column;
    display: flex;
`;

const Button=styled.button`
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

const Btn=styled.span`
--tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ContinueMale = () => {
    const location = useLocation();
  const { data } = location.state;
  let a;
  if(data===11||data===12||data===13||data===14){
    a=B;
  }
  else if(data===21||data===22||data===23||data===24){
    a=BF;
  }
  return (
    <>
    <Cover>
        <Top>
            <Container>
                <Logo src={L} alt="logo" width={115} height={28}/>
            </Container>
        </Top>
        <Body>
            <Wrapper>
                <Background style={{backgroundImage: `url(${a})`}} alt="background"/>
                <Rest>
                    <Header>1.4 million</Header>
                    <Paragraph>completed our investment readiness assesment</Paragraph>
                </Rest>
            </Wrapper>
            <Bottom>
            <Link to={`/quiz`} state={{data: data}} style={{ textDecoration: 'none' }}>
                <Continue>
               
                    <Button>                   
                      <Btn> continue</Btn>
                    </Button>
                    
                </Continue>
                </Link> 
            </Bottom>
        </Body>
    </Cover>
    </>
  )
}

export default ContinueMale