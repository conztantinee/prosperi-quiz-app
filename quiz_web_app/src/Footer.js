import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper=styled.div`
margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    position:absolute;
    bottom: 0;
    left: 0;
    right:0;
    margin-top: 24px;
`;


const Container=styled.div`
  --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    display: flex;

`;

const Cover=styled.div`
--tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
`;


const Text1=styled.p`
text-align: center;
font-size: .75rem;
line-height: 1rem;
font-weight: 400;
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    font-family: system-ui;
`;


const Text2=styled.p`
text-align: center;
font-size: .75rem;
line-height: 1rem;
font-weight: 400;
--tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
    min-height: 24px;
    font-family: system-ui;
`;


const Website=styled.a`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration-line: underline;
    --tw-text-opacity: 1;
    color: rgb(0 0 255/var(--tw-text-opacity));
`;

function Footer(){
return(
    <Wrapper>
    <Container>
        <Cover>
        <Text1>By continuing, you agree with <Link to={`/terms`}><Website>Terms and Conditions</Website></Link>,<Link to={`/privacy`}><Website>Privacy Policy</Website></Link>, <Link to={`/subscription`}><Website>Subscription Terms</Website></Link></Text1>
        <Text2>AAAPPS LTD, London, United Kingdom</Text2>
        </Cover>
        </Container></Wrapper>
);
}
export default Footer;