import React from 'react';
import Footer from './Footer';
import { Navbar } from './Navbar';
import Body from './Body';
import styled from 'styled-components';

const Container=styled.div`
padding-bottom: 104px;
max-width: 400px;
margin-left: auto;
margin-right: auto;
`;

function Homepage() {
  return (
    <>
    <Container>
      <Navbar/>
      <Body/>
    </Container>
    <Footer/>
    </>
  );
}

export default Homepage;
