import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import ThankYouPage from "./Thanks";
import X from "./assets/icons/icon-cross.svg";
import Mail from "./assets/icons/mail.svg";
import RedW from "./assets/icons/red-info.svg";
import Lock from "./assets/icons/lock.svg";
import Check from "./assets/icons/check.svg";
import C from "./assets/selling-page/card.svg";
import Paypal from "./assets/selling-page/paypal.svg";
import PayPalButton from "./PayPalButton";
import CheckoutForm from "./StripeForm";

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
  max-width: 550px;
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

const HeaderText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 0;
`;

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  margin: 0;
`;

const Email = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration-line: underline;
  --tw-text-opacity: 1;
  color: rgb(0 0 238 / var(--tw-text-opacity));
  text-align: center;
`;

const Footer = styled.div`
  margin-top: 1rem;
  flex-direction: row;
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;

const Total = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  --tw-text-opacity: 1;
  color: rgb(64 68 77 / var(--tw-text-opacity));
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const Price = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  --tw-text-opacity: 1;
  color: rgb(86 83 254 / var(--tw-text-opacity));
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const ImagesWrapper = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.button`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 2px;
  width: 100%;
  min-height: 72px;
  display: flex;
  margin-right: 0.5rem;
`;

const FieldWrapper = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
`;

const Field = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 44px;
  padding: 0.75rem;
  background-position: 14px;
  background-repeat: no-repeat;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  text-align: center;
`;

const RedSign = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 20px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  width: 1.25rem;
  height: 1.25rem;
  right: 14px;
  top: 25%;
  position: absolute;
`;

const SubmitButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: none;
  border-radius: 8px;
  font-size: 14px;
  background-color: #5653fe;
`;

function PayPopup(props) {
  //PayPal when true, Stripe when false
  const [method, setMethod] = useState(true);

  console.log(method);
  const [validMail, setValidMail] = useState(false);
  const [email, setEmail] = useState("");

  function validateEmail(email) {
    // Regular expression to validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  function handleInputChange(event) {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setValidMail(validateEmail(emailValue));
  }

  function handleClick1() {
    setMethod(true);
  }

  function handleClick2() {
    setMethod(false);
  }

  return (
    <>
      <PopupContainer>
        <PopupWrapper>
          <CloseButtonImage src={X} alt="Close Popup" onClick={props.close} />
          <HeaderText>Select payment method</HeaderText>
          <ImagesWrapper>
            <ImageContainer
              onClick={handleClick1}
              style={{
                backgroundColor: method ? "#ffffff" : "#e4e5e7",
                borderColor: method ? "#5653FE" : "#ffffff",
              }}
            >
              <img src={Paypal} width={"83px"} height={"40px"} />
            </ImageContainer>
            <ImageContainer
              onClick={handleClick2}
              style={{
                backgroundColor: method ? "#e4e5e7" : "#ffffff",
                borderColor: method ? "#ffffff" : "#5653fe",
              }}
            >
              <img src={C} width={"83px"} height={"40px"} />
            </ImageContainer>
          </ImagesWrapper>
          {method && (
            <ContentWrapper>
              <PayPalButton />
            </ContentWrapper>
          )}
          {!method && (
            <ContentWrapper>
              <CheckoutForm />
            </ContentWrapper>
          )}
          <div>
            <Footer>
              <Total>Total : </Total>
              <Price> 10$</Price>
            </Footer>
          </div>
        </PopupWrapper>
      </PopupContainer>
      <Backdrop onClick={props.close} />
    </>
  );
}

export default PayPopup;
