import React from 'react'
import styled from 'styled-components'
import L from './assets/logo.svg'
import I from './assets/question_icon.webp'
import HelpPopUp from './HelpPopUp'

const Wrapper=styled.div`
padding-bottom: 1rem;
padding-top: 22px;
`;

const Container=styled.div`
justify-content: center;
display: flex;
position: relative;
`;

const Items=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding-left: 1rem;
padding-right: 1rem;
`;

const Logo=styled.img`
color: transparent;
max-width: 100%;
height: auto;
display: block;
vertical-align: middle;
`;

const Element=styled.div`
flex-direction: row;
display: flex;
`;

const Login=styled.span`
text-transform: uppercase;
font-weight: 700;
font-size: 1rem;
line-height: 1.5rem;
margin-left: 14px;
font-family: system-ui;`

export const Navbar = () => {
  return (
    <Wrapper>
        <Container>
            <Items>
                <Logo src={L} alt="logo" width={115} height={28}/>
                <Element>
                 
                    <HelpPopUp buttonImage={I}/>
                    <Login>log in</Login>
                </Element>
            </Items>
        </Container>
    </Wrapper>
  )
}
