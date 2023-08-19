import React from 'react'
import { Navbar } from './Navbar'
import styled from 'styled-components'
import Footer from './Footer'
import Bluearch from "./assets/person-button/blue-arch.svg"
import Chevron from "./assets/icons/chevron-right.svg"
import Eighteen from "./assets/age-picker/male/18-25.png"
import Twenties from "./assets/age-picker/male/26-35.png"
import Thirties from "./assets/age-picker/male/36-45.png"
import Old from "./assets/age-picker/male/46+.png"
import Eighteenf from "./assets/age-picker/female/18-25.png"
import Twentiesf from "./assets/age-picker/female/26-35.png"
import Thirtiesf from "./assets/age-picker/female/36-45.png"
import Oldf from "./assets/age-picker/female/46+.png"
import { Link, useLocation } from 'react-router-dom'


const Cover=styled.div`
padding-bottom: 104px;
max-width: 400px;
margin-left: auto;
margin-right: auto;`;

const Wrapper=styled.div`
padding-left: 1rem;
padding-right: 1rem;
`;

const Container=styled.div`
--tw-space-y-reverse: 0;
margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(1rem * var(--tw-space-y-reverse));
margin: 0px;
`;

const Header=styled.h1`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    font-family: system-ui;
`;

const Options=styled.div`
gap: 1rem;
grid-template-columns: repeat(2,minmax(0,1fr));
display: grid;
`;

const Ages=styled.div`
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

const Button=styled.button`
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

const PickAgeMale = () => {
    const location = useLocation();
  const { data } = location.state;
  let a,b,c,d;
  if(data===1){
    a=Eighteen;
    b=Twenties;
    c=Thirties;
    d=Old;
  }
  else if(data===2){
    a=Eighteenf;
    b=Twentiesf;
    c=Thirtiesf;
    d=Oldf;
  }
  return (
    <>
    <Cover>
    <Navbar/>
    <Wrapper>
        <Container>
            <Header>Wealth growth plan according to your age</Header>
            <Options>
            <Link to={`/age/cont`} state={{ data: data*10+1 } } >
                <Ages style={{backgroundImage: `url(${Bluearch})`}}>
                    <Frame style={{backgroundImage: `url(${a})`}}>
                        
                        <Button>
                            <BText>18-25</BText>
                            <Arrow style={{backgroundImage: `url(${Chevron})`}}/>
                        </Button>
                        
                    </Frame>
                </Ages>
                </Link>
                <Link to={`/age/cont`} state={{ data: data*10+2 } } >
                <Ages style={{backgroundImage: `url(${Bluearch})`}}>
                    <Frame style={{backgroundImage: `url(${b})`}}>
                   
                        <Button>
                            <BText>26-35</BText>
                            <Arrow style={{backgroundImage: `url(${Chevron})`}}/>
                        </Button>
                        
                    </Frame>
                    
                </Ages>
                </Link>
                <Link to={`/age/cont`} state={{ data: data*10+3 } } >
                <Ages style={{backgroundImage: `url(${Bluearch})`}}>
                    <Frame style={{backgroundImage: `url(${c})`}}>
                    
                        <Button>
                            <BText>36-45</BText>
                            <Arrow style={{backgroundImage: `url(${Chevron})`}}/>
                        </Button>
                        
                    </Frame>
                </Ages>
                </Link>
                <Link to={`/age/cont`} state={{ data: data*10+4 } } >
                <Ages style={{backgroundImage: `url(${Bluearch})`}}>
                    <Frame style={{backgroundImage: `url(${d})`}}>                 
                        <Button>
                            <BText>46+</BText>
                            <Arrow style={{backgroundImage: `url(${Chevron})`}}/>
                        </Button>                        
                    </Frame>
                </Ages>
                </Link>
            </Options>
        </Container>
    </Wrapper>
    </Cover>
    <Footer/>
    </>
  )
}

export default PickAgeMale