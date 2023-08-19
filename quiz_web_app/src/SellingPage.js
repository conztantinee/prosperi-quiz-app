import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import L from "./assets/logo.svg";
import BG from "./assets/selling-page/now-goal/background.png";
import Bubbles from "./assets/selling-page/now-goal/bubbles.png";
import Comp22_1 from "./assets/selling-page/now-goal/female/26-35/1.png";
import Comp22_2 from "./assets/selling-page/now-goal/female/26-35/2.png";
import Comp11_1 from "./assets/selling-page/now-goal/male/18-25/1.png";
import Comp11_2 from "./assets/selling-page/now-goal/male/18-25/2.png";
import Comp12_1 from "./assets/selling-page/now-goal/male/26-35/1.png";
import Comp12_2 from "./assets/selling-page/now-goal/male/26-35/2.png";
import Comp23_1 from "./assets/selling-page/now-goal/female/36-45/1.png";
import Comp23_2 from "./assets/selling-page/now-goal/female/36-45/2.png";
import Comp21_1 from "./assets/selling-page/now-goal/female/18-25/1.png";
import Comp21_2 from "./assets/selling-page/now-goal/female/18-25/2.png";
import Comp13_1 from "./assets/selling-page/now-goal/male/36-45/1.png";
import Comp13_2 from "./assets/selling-page/now-goal/male/36-45/2.png";
import SkillNow from "./assets/selling-page/now-goal/skills-now.webp";
import SkillGoal from "./assets/selling-page/now-goal/skills-goal.webp";
import PowerNow from "./assets/selling-page/power-now.svg";
import PowerGoal from "./assets/selling-page/power-goal.svg";
import Lightbulb from "./assets/selling-page/lightbulb.png";
import Eighteen from "./assets/age-picker/male/18-25.png";
import Twenties from "./assets/age-picker/male/26-35.png";
import Thirties from "./assets/age-picker/male/36-45.png";
import Old from "./assets/age-picker/male/46+.png";
import Eighteenf from "./assets/age-picker/female/18-25.png";
import Twentiesf from "./assets/age-picker/female/26-35.png";
import Thirtiesf from "./assets/age-picker/female/36-45.png";
import Oldf from "./assets/age-picker/female/46+.png";
import Company from "./assets/selling-page/netflix_tesla.webp";
import Tick from "./assets/selling-page/icon-green-tick.svg";
import Money from "./assets/selling-page/ab-test-assets/money-back/icon-money-back.svg";
import Rating from "./assets/selling-page/rating-icon.svg";
import { useRef } from "react";
import M from "./assets/selling-page/payment_methods.svg";
import S from "./assets/selling-page/icon_secure.svg";
import PayPopup from "./PayPopUp";
import Slider from "./Slider";

const MainContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 64px;
  display: flex;
  z-index: 20;
  top: 0;
  position: sticky;
`;

const Logo = styled.img`
  color: transparent;
`;

const UpTimerWrapper = styled.div`
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
`;

const UpTimerText = styled.p`
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  font-size: 9px;
`;

const UpTimer = styled.p`
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const UpTimerTextDown = styled.div`
  font-weight: 500;
  font-size: 9px;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;

const GlowingButton = styled.button`
  @keyframes pulsate {
    0% {
      box-shadow: 0 0 0 0 rgba(86, 83, 254, 0.4);
    }
    50% {
      box-shadow: 0 0 0 20px rgba(86, 83, 254, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(86, 83, 254, 0);
    }
  }
  animation: pulsate 2s infinite;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: rgb(86 83 254 / var(--tw-bg-opacity));
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  cursor: pointer;
  border: none;
`;

const ButtonText = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  justify-items: center;
`;

const Comparison = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;
  flex-direction: column;
  display: flex;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
  --tw-border-opacity: 1;
  border-color: rgb(196 199 204 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
`;

const ComparisonTitles = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  display: flex;
`;

const ComparisonTitle = styled.p`
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  font-size: 1rem;
  line-height: 1.5rem;
`;

const ComparisonTitleBreak = styled.hr`
  width: 0.5px;
  height: 2rem;
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  margin: 0;
`;

const ComparisonBG = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  height: 225px;
`;

const ComparisonImg = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

const ComparisonImgRight = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
`;

const BubblesBG = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-translate-x: -50%;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  width: 80%;
  height: 70%;
  top: 0;
  left: 50%;
  position: absolute;
`;

const StatsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StatContainer = styled.div`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.75rem;
  flex-direction: column;
  width: 100%;
  display: flex;
`;

const StatBreak = styled.hr`
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  width: 0.5px;
  height: 12rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StatUpText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-bottom: 10px;
  margin: 0;
`;

const StatMidText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-bottom: 10px;
  padding-top: 1rem;
  margin: 0;
`;

const StatDownText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  font-weight: 500;
  padding-bottom: 0.5rem;
  margin: 0;
`;

const DisclaimerText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  margin: 0;
`;

const ReadinessWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const ReadinessUp = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const ReadinessDown = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid rgb(196, 199, 204);
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
  justify-content: center;
  align-items: center;
`;

const ReadinessText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  margin-right: 4px;
  --tw-text-opacity: 1;
  color: rgb(64 68 77 / var(--tw-text-opacity));
  margin-top: 0;
  margin-bottom: 0;
`;

const ReadinessTextGreen = styled.span`
  --tw-text-opacity: 1;
  color: rgb(122 191 76 / var(--tw-text-opacity));
`;

const FrameWrapper = styled.div`
  margin: 0px -16px;
  padding-bottom: 40px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  --tw-bg-opacity: 1;
  background-color: rgb(238 238 255 / var(--tw-bg-opacity));
`;

const FrameHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin: 0;
`;

const FrameImgWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const PersonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Fade = styled.div`
  background: linear-gradient(
    rgba(238, 238, 255, 0) 0%,
    rgb(238, 238, 255) 84.39%
  );
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 50px;
`;

const FrameBelow = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const FrameBelowText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`;

const FrameBelowEmoji = styled.span`
  margin-right: 16px;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const DetailsWrapper = styled.div`
  margin-bottom: -16px;
  margin-top: 40px;
`;

const DetailHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 24px;
`;

const DetailPoint = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 18px;
`;

const DetailText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 8px;
  margin-top: 0;
  margin-bottom: 0;
`;

const TermContainer = styled.div`
  margin: 0px -16px 40px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 24px;
  padding-right: 24px;
  --tw-bg-opacity: 1;
  background-color: rgb(242 249 237 / var(--tw-bg-opacity));
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const TermHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const TermTextUp = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-bottom: 8px;
`;

const TermTextBottom = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;

const PointWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

const DotWrapper = styled.span`
  justify-content: center;
  background-color: rgba(86, 83, 254, 0.2);
  align-items: center;
  border-radius: 9999px;
  flex-direction: row;
  display: flex;
  min-width: 20px;
  min-height: 20px;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
`;

const Dot = styled.span`
  border-radius: 9999px;
  display: block;
  width: 10px;
  height: 10px;
  --tw-bg-opacity: 1;
  background-color: rgb(86 83 254 / var(--tw-bg-opacity));
`;

const DotText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  line-height: 24px;
  margin: 0;
`;

const LieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;

const UserWrapper = styled.span`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const UserName = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --tw-text-opacity: 1;
  color: rgb(72 72 74 / var(--tw-text-opacity));
  display: inline-block;
  margin: 0;
`;

const CommentBox = styled.div`
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  border-color: #e5e7eb; ;
`;

const CommentText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 0.5rem;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  --tw-text-opacity: 1;
  color: rgb(18 20 29 / var(--tw-text-opacity));
`;

const MainBox = styled.div`
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  flex-direction: column;
  display: flex;
`;

const UpBorder = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(86 83 254 / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgb(86 83 254 / var(--tw-border-opacity));
  gap: 0.125rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-width: 1px;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 1.25rem;
  top: 1px;
  position: relative;
`;

const BoxContent = styled.div`
  padding: 0.75rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(196 199 204 / var(--tw-border-opacity));
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  row-gap: 0.25rem;
  display: flex;
  flex-direction: column;
  border: solid;
  border-width: 0.5px;
`;

const BoxUp = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
`;

const BoxMidWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const BoxMidText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const BoxTimerWrapper = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #f052521a;
  border-radius: 0.375rem;
`;

const BoxTimer = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const BoxBottomText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
  font-size: 11px;
  margin-top: 0.125rem;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  --tw-text-opacity: 1;
  color: rgb(137 142 153 / var(--tw-text-opacity));
`;

const BigButtonWrapper = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  flex-direction: column;
  padding-bottom: 1.5rem;
  width: 100%;
  display: flex;
  margin-top: 0.25rem;
`;

const BigButton = styled.button`
  @keyframes pulsate {
    0% {
      box-shadow: 0 0 0 0 rgba(86, 83, 254, 0.4);
    }
    50% {
      box-shadow: 0 0 0 20px rgba(86, 83, 254, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(86, 83, 254, 0);
    }
  }
  animation: pulsate 2s infinite;
  padding: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(86 83 254 / var(--tw-bg-opacity));
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  cursor: pointer;
  border: none;
  text-align: center;
`;

const Safe = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  --tw-bg-opacity: 1;
  background-color: rgb(242 249 237 / var(--tw-bg-opacity));
  border-radius: 0.25rem;
  align-items: center;
  flex-direction: row;
  display: flex;
  border: none;
  max-width: 168px;
`;

const SafeText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 6px;
  --tw-text-opacity: 1;
  color: rgb(122 191 76 / var(--tw-text-opacity));
`;

const Methods = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  min-height: 61px;
`;

const Website = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration-line: underline;
  --tw-text-opacity: 1;
  color: rgb(0 0 255 / var(--tw-text-opacity));
`;

const Agree = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  margin: 0;
  --tw-text-opacity: 1;
  color: rgb(83 100 113 / var(--tw-text-opacity));
  font-size: 10px;
`;

const CompanyName = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  font-size: 10px;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(83 100 113 / var(--tw-text-opacity));
  text-align: center;
  min-height: 24px;
  margin-top: 0.75rem;
`;

const SliderContainer = styled.div`
  margin: 0 -16px;
  --tw-text-opacity: 1;
  color: rgb(36 35 76 / var(--tw-text-opacity));
  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const SliderHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 42px;
`;

const SellingPage = () => {
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const myRef = useRef(null);

  const handleClick = () => {
    if (myRef.current) {
      myRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const location = useLocation();
  const { data } = location.state;
  let a, b, c;
  if (data === 11) {
    a = Comp11_1;
    b = Comp11_2;
    c = Eighteen;
  } else if (data === 12) {
    a = Comp12_1;
    b = Comp12_2;
    c = Twenties;
  } else if (data === 13) {
    c = Thirties;
    a = Comp13_1;
    b = Comp13_2;
  } else if (data === 14) {
    c = Old;
    a = Comp12_1;
    b = Comp12_2;
  } else if (data === 21) {
    c = Eighteenf;
    a = Comp21_1;
    b = Comp21_2;
  } else if (data === 22) {
    c = Twentiesf;
    a = Comp22_1;
    b = Comp22_2;
  } else if (data === 23) {
    c = Thirtiesf;
    a = Comp23_1;
    b = Comp23_2;
  } else if (data === 24) {
    c = Oldf;
    a = Comp22_1;
    b = Comp22_2;
  }
  return (
    <MainContainer>
      <Header>
        {seconds > 0 ? (
          <UpTimerWrapper>
            <UpTimerText>Discount expires in</UpTimerText>
            <UpTimer>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {remainingSeconds < 10
                ? `0${remainingSeconds}`
                : remainingSeconds}
            </UpTimer>
            <UpTimerTextDown>min sec</UpTimerTextDown>
          </UpTimerWrapper>
        ) : (
          <Logo src={L} alt="logo" width={134} height={32} />
        )}

        <GlowingButton onClick={handleClick} style={{ textDecoration: "none" }}>
          <ButtonText>try now</ButtonText>
        </GlowingButton>
      </Header>
      <Wrapper>
        <Comparison>
          <ComparisonTitles>
            <ComparisonTitle>Now</ComparisonTitle>
            <ComparisonTitleBreak />
            <ComparisonTitle>Goal</ComparisonTitle>
          </ComparisonTitles>
          <ComparisonBG style={{ backgroundImage: `url(${BG}` }}>
            <ComparisonImg style={{ backgroundImage: `url(${a}` }} />
            <ComparisonImgRight style={{ backgroundImage: `url(${b}` }}>
              <BubblesBG style={{ backgroundImage: `url(${Bubbles}` }} />
            </ComparisonImgRight>
          </ComparisonBG>
          <StatsWrapper>
            <StatContainer>
              <StatUpText>Investing skills</StatUpText>
              <img
                alt={"Moderate"}
                src={SkillNow}
                width={140}
                height={59}
                style={{
                  color: "transparent",
                  maxWidth: "500px",
                  width: "100%",
                  height: "auto",
                }}
              />
              <StatMidText>Purchasing power</StatMidText>
              <img
                alt={"Moderate"}
                src={PowerNow}
                width={100}
                height={100}
                style={{
                  color: "transparent",
                  maxWidth: "500px",
                  width: "100%",
                  height: "auto",
                }}
              />
              <StatDownText>Limited</StatDownText>
            </StatContainer>
            <StatBreak />
            <StatContainer>
              <StatUpText>Investing skills</StatUpText>
              <img
                alt={"High"}
                src={SkillGoal}
                width={140}
                height={59}
                style={{
                  color: "transparent",
                  maxWidth: "500px",
                  width: "100%",
                  height: "auto",
                }}
              />
              <StatMidText>Purchasing power</StatMidText>
              <img
                alt={"High"}
                src={PowerGoal}
                width={100}
                height={100}
                style={{
                  color: "transparent",
                  maxWidth: "500px",
                  width: "100%",
                  height: "auto",
                }}
              />
              <StatDownText>High</StatDownText>
            </StatContainer>
          </StatsWrapper>
        </Comparison>
        <DisclaimerText>
          This is not a guarantee or promise of results.
        </DisclaimerText>
        <ReadinessWrapper>
          <ReadinessUp>
            <span style={{ color: `rgb(36,35,76)` }}>Your readiness: </span>
            <span style={{ color: `rgb(122,191,76)` }}> 80.75%</span>
          </ReadinessUp>
          <ReadinessDown>
            <ReadinessText>
              <ReadinessTextGreen>7-day </ReadinessTextGreen>
              program is enough for you to start your investment journey
            </ReadinessText>
            <img
              alt={"lighbulb"}
              src={Lightbulb}
              width={32}
              height={37}
              style={{ color: "transparent", width: "32px", height: "37px" }}
            />
          </ReadinessDown>
        </ReadinessWrapper>
        <FrameWrapper>
          <FrameHeader>Investing is easier than you think</FrameHeader>
          <div>
            <FrameImgWrapper>
              <PersonContainer>
                <img
                  alt={"person"}
                  src={c}
                  width={150}
                  height={210}
                  style={{
                    color: "transparent",
                    width: "150px",
                    height: "210px",
                  }}
                />
                <Fade />
              </PersonContainer>
              <img
                alt={"netflix-tesla"}
                src={Company}
                width={150}
                height={210}
                style={{
                  color: "transparent",
                  width: "150px",
                  height: "210px",
                }}
              />
            </FrameImgWrapper>
            <div>
              <FrameBelow>
                <FrameBelowText>
                  <FrameBelowEmoji>👌</FrameBelowEmoji>
                  You can start with $10
                </FrameBelowText>
              </FrameBelow>
              <FrameBelow>
                <FrameBelowText>
                  <FrameBelowEmoji>👌</FrameBelowEmoji>
                  No need for a Finance degree
                </FrameBelowText>
              </FrameBelow>
              <FrameBelow>
                <FrameBelowText>
                  <FrameBelowEmoji>👌</FrameBelowEmoji>
                  No need to be a market expert
                </FrameBelowText>
              </FrameBelow>
            </div>
          </div>
        </FrameWrapper>
        <DetailsWrapper>
          <DetailHeader>Try Prosperi for 7 days, and you will:</DetailHeader>
          <div>
            <DetailPoint>
              <img
                alt={"green tick"}
                src={Tick}
                width={20}
                height={20}
                style={{ color: "transparent", width: "20px", height: "20px" }}
              />
              <DetailText>Know key investment terms and rules</DetailText>
            </DetailPoint>
            <DetailPoint>
              <img
                alt={"green tick"}
                src={Tick}
                width={20}
                height={20}
                style={{ color: "transparent", width: "20px", height: "20px" }}
              />
              <DetailText>
                Have an opportunity to become an investor and buy your first
                stocks/crypto
              </DetailText>
            </DetailPoint>
            <DetailPoint>
              <img
                alt={"green tick"}
                src={Tick}
                width={20}
                height={20}
                style={{ color: "transparent", width: "20px", height: "20px" }}
              />
              <DetailText>Discover additional income sources</DetailText>
            </DetailPoint>
          </div>
        </DetailsWrapper>
        <MainBox ref={myRef}>
          <div style={{ width: "100%" }}>
            <div style={{ position: "relative", marginBottom: "0.75rem" }}>
              <UpBorder />
              <BoxContent>
                <BoxUp>7-day trial for $10</BoxUp>
                <BoxMidWrapper>
                  <BoxMidText>Discount expires in</BoxMidText>
                  <BoxTimerWrapper>
                    <BoxTimer>
                      {minutes < 10 ? `0${minutes}` : minutes}:
                      {remainingSeconds < 10
                        ? `0${remainingSeconds}`
                        : remainingSeconds}
                    </BoxTimer>
                  </BoxTimerWrapper>
                </BoxMidWrapper>
                <BoxBottomText>
                  $29.99 billed monthly after the 1st week
                </BoxBottomText>
              </BoxContent>
              <BigButtonWrapper style={{ marginTop: "12px" }}>
                <BigButton onClick={togglePopup}>
                  <ButtonText style={{ marginLeft: "128px" }}>
                    Try now
                  </ButtonText>
                </BigButton>
              </BigButtonWrapper>
              {isOpen && <PayPopup close={togglePopup} />}
              <Safe style={{ marginLeft: "90px" }}>
                <img src={S} width={"18px"} height={"18px"} />
                <SafeText>Pay safe & secure</SafeText>
              </Safe>
              <Methods style={{ marginLeft: "87px" }}>
                <img src={M} width={"194px"} height={"61px"} />
              </Methods>
              <Agree>
                By continuing, you agree that your introductory offer will be
                $10 only. If you do not cancel at least 24 hours before the end
                of then-current period, you will be charged full price of our
                month subscription plan $29.99 each month until you cancel in
                your account settings. Learn more about the refund and
                cancellation policies in the{" "}
                <Website href="https://prosperi.university/subscription">
                  Subscription Terms
                </Website>
              </Agree>
              <CompanyName>AAAPPS LTD, London, United Kingdom</CompanyName>
            </div>
          </div>
        </MainBox>
        <TermContainer>
          <img
            alt={"money back"}
            src={Money}
            width={96}
            height={132}
            style={{ color: "transparent", width: "96px", height: "132px" }}
          />
          <TermHeader>Money-Back Guarantee</TermHeader>
          <TermTextUp>
            We are so confident in our service that we are ready to offer a full
            refund within 30 days of purchase if you do not achieve initial
            results and can demonstrate you have followed the plan.
          </TermTextUp>
          <TermTextBottom>
            Learn more about all the conditions in our Subscription Terms.
          </TermTextBottom>
        </TermContainer>
        <SliderContainer>
          <SliderHeader>
            Access Prosperi anywhere using your mobile device
          </SliderHeader>
          <Slider />
        </SliderContainer>
        <div>
          <DetailHeader>What you get</DetailHeader>
          <PointWrapper>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <DotText>Investment income know-how</DotText>
          </PointWrapper>
          <PointWrapper>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <DotText>2,000 insightful, easy and fun lesson-questions.</DotText>
          </PointWrapper>
          <PointWrapper>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <DotText>
              Crypto and stock investment simulator with real-world data.
            </DotText>
          </PointWrapper>
          <PointWrapper>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <DotText>
              24/7 chat with your personal coach to get all answers and reduce
              mistakes.
            </DotText>
          </PointWrapper>
          <PointWrapper>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <DotText>
              Reliable daily market updates from most trusted news resources.
            </DotText>
          </PointWrapper>
        </div>
        <div>
          <DetailHeader>People love the Prosperi</DetailHeader>
          <LieWrapper>
            <UserWrapper>
              <p
                style={{
                  fontSize: "32px",
                  marginRight: "12px",
                  display: "inline-block",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                😎
              </p>
              <UserName>@der_kennndy1</UserName>
            </UserWrapper>
            <CommentBox>
              <CommentText>
                "I really appreciate your lessons on different topics guys. I
                want to get really good at this. It was actually cool, I have
                learnt a lot."
              </CommentText>
              <img
                alt={"5 stars"}
                src={Rating}
                width={129}
                height={21}
                style={{ color: "transparent" }}
              />
            </CommentBox>
          </LieWrapper>
          <LieWrapper>
            <UserWrapper>
              <p
                style={{
                  fontSize: "32px",
                  marginRight: "12px",
                  display: "inline-block",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                😎
              </p>
              <UserName>@dexter_brechtefeld</UserName>
            </UserWrapper>
            <CommentBox>
              <CommentText>
                "I admit, this is one of the best simulation games I have
                played. Gives you practical knowledge of the stock market."
              </CommentText>
              <img
                alt={"5 stars"}
                src={Rating}
                width={129}
                height={21}
                style={{ color: "transparent" }}
              />
            </CommentBox>
          </LieWrapper>
          <LieWrapper>
            <UserWrapper>
              <p
                style={{
                  fontSize: "32px",
                  marginRight: "12px",
                  display: "inline-block",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                😎
              </p>
              <UserName>@pattykivuva</UserName>
            </UserWrapper>
            <CommentBox>
              <CommentText>
                "The courses have been quite good in fact have never got an
                application which gives so much information like prosper kudos,
                and the beautiful thing is am learning new things and tactics of
                doing trade online"
              </CommentText>
              <img
                alt={"5 stars"}
                src={Rating}
                width={129}
                height={21}
                style={{ color: "transparent" }}
              />
            </CommentBox>
          </LieWrapper>
        </div>
      </Wrapper>
    </MainContainer>
  );
};

export default SellingPage;
