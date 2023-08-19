import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import X from './assets/icons/icon-cross.svg'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 10rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupWrapper = styled.div`
  position: relative;
  height: 465px;
  width: 100%;
  max-width: 368px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease-out forwards;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9998;
`;
const ButtonImage = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const CloseButtonImage = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const HeaderText=styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 700;
font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    margin-bottom: 1.5rem;
    margin-top: 0;
`;

const ContentWrapper=styled.div`
text-align: center;
display: flex;
flex-direction: column;
`;

const ContentText=styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 400;
font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    margin: 0;
`;

const Email=styled.a`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration-line: underline;
    --tw-text-opacity: 1;
    color: rgb(0 0 238/var(--tw-text-opacity));
    text-align: center;
`;

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonImage src={props.buttonImage} alt="Open Popup" onClick={togglePopup} />
      {isOpen && (
        <>
          <PopupContainer>
            <PopupWrapper>
              <CloseButtonImage src={X} alt="Close Popup" onClick={togglePopup} />
              <HeaderText>Need some help?</HeaderText>
              <ContentWrapper>
                <ContentText>We will be glad to assist you. Please send your questions and feedback to</ContentText>
                <Email href="mailto:support@prosperi.university">support@prosperi.university</Email>
              </ContentWrapper>
            </PopupWrapper>
          </PopupContainer>
          <Backdrop onClick={togglePopup} />
        </>
      )}
    </>
  );
}

export default Popup;
