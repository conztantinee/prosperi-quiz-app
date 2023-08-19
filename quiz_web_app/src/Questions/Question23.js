import React, { useState } from "react";
import styled from "styled-components";
import Mail from "../assets/icons/mail.svg";
import RedW from "../assets/icons/red-info.svg";
import Lock from "../assets/icons/lock.svg";
import Check from "../assets/icons/check.svg";
import { useDispatch } from "react-redux";
import { setEmail } from "../store/slices/questions";

const Container = styled.div`
  opacity: 1;
`;

const Wrapper = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

const Bottom = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
`;

const ButtonFrame = styled.div`
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-bottom: 1.5rem;
  padding-right: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  flex-direction: column;
  display: flex;
`;

const ButtonReal = styled.button`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  padding: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(86 83 254 / var(--tw-bg-opacity));
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  border: none;
`;

const ButtonText = styled.span`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  text-transform: uppercase;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const HeaderText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
`;

const HeaderPurple = styled.span`
  --tw-text-opacity: 1;
  color: rgb(86 83 254 / var(--tw-text-opacity));
`;

const FieldWrapper = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
`;

const Warning = styled.span`
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.5rem;
`;

const Done = styled.span`
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.5rem;
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

const Disclaimer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 24px;
`;

const LockSign = styled.div`
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: 50%;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(86 83 254 / var(--tw-bg-opacity));
`;

const DisclaimerText = styled.span`
  margin-left: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(72 72 74 / var(--tw-text-opacity));
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Question23 = (props) => {
  const dispatch = useDispatch();

  const [validMail, setValidMail] = useState(false);
  const [email, setEmailValue] = useState("");

  const handleNext = () => {
    dispatch(
      setEmail({
        email,
      })
    );
    props.onNext();
  };

  function validateEmail(email) {
    // Regular expression to validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  function handleInputChange(event) {
    const emailValue = event.target.value;
    setEmailValue(emailValue);
    setValidMail(validateEmail(emailValue));
  }
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <HeaderText>
              Enter your email to get your personal{" "}
              <HeaderPurple>Wealth-Growth</HeaderPurple> plan!{" "}
            </HeaderText>
          </div>
          <div style={{ marginTop: "24px" }}>
            <div>
              <FieldWrapper>
                <Field
                  style={{
                    backgroundImage: `url(${Mail})`,
                    borderColor: validMail ? "#c4c7cc" : "#F05252",
                  }}
                  placeholder={"Your email"}
                  onChange={handleInputChange}
                />
                {validMail ? (
                  <RedSign style={{ backgroundImage: `url(${Check})` }} />
                ) : (
                  <RedSign style={{ backgroundImage: `url(${RedW})` }} />
                )}
              </FieldWrapper>
              {validMail ? (
                <Done>Well done!</Done>
              ) : (
                <Warning>Email is invalid</Warning>
              )}
            </div>
            <Disclaimer>
              <LockSign style={{ backgroundImage: `url(${Lock})` }} />
              <DisclaimerText>
                We respect your privacy and are committed to protecting your
                personal data
              </DisclaimerText>
            </Disclaimer>
          </div>
        </Wrapper>
      </Container>
      <Bottom>
        <ButtonFrame>
          {validMail ? (
            <ButtonReal onClick={handleNext}>
              <ButtonText>Continue</ButtonText>
            </ButtonReal>
          ) : (
            <ButtonReal style={{ backgroundColor: "#9A98FE" }}>
              <ButtonText>Continue</ButtonText>
            </ButtonReal>
          )}
        </ButtonFrame>
      </Bottom>
    </>
  );
};

export default Question23;
