import React, { useState } from "react";
import styled from "styled-components";



import imageA from "./assets/selling-page/slider/page-1.webp";
import imageB from "./assets/selling-page/slider/page-2.webp";
import imageC from "./assets/selling-page/slider/page-3.webp";
import imageD from "./assets/selling-page/slider/page-4.webp";
import imageE from "./assets/selling-page/slider/page-5.webp";

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px){
    overflow-x: hidden;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.img`
  width: 70%;
  height: 90%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;

const LeftImage = styled(ImageWrapper)`
  opacity: 0.6;
  transform: translateX(-150px);
  z-index: 3;
`;

const RightImage = styled(ImageWrapper)`
  opacity: 0.6;
  transform: translateX(150px);
  z-index: 3;
`;

const CurrentImage = styled(ImageWrapper)`
  transform: scale(1.2);
  z-index: 1;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 10px;
  z-index: 2;
`;

const RightArrowButton = styled(ArrowButton)`
  right: 10px;
  z-index: 2;
`;

const BubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Bubble = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "purple" : "gray")};
  cursor: pointer;
`;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [imageA, imageB, imageC, imageD, imageE];
  
    const handleNextSlide = () => {
      setCurrentSlide((currentSlide + 1) % images.length);
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((currentSlide + images.length - 1) % images.length);
    };
  
    const handleBubbleClick = (index) => {
      setCurrentSlide(index);
    };
  
    const getLeftIndex = (index) => {
      return (index + images.length - 1) % images.length;
    };
    
    const getRightIndex = (index) => {
        return (index + 1) % images.length;
        };
        
        return (
            <SliderWrapper>
            <SlideWrapper currentSlide={currentSlide}>
              <LeftArrowButton onClick={handlePrevSlide}>{"<"}</LeftArrowButton>
              <ImageContainer>
                <LeftImage
                  src={images[getLeftIndex(currentSlide)]}
                  alt=""
                />
                <CurrentImage
                  src={images[currentSlide]}
                  alt=""
                />
                <RightImage
                  src={images[getRightIndex(currentSlide)]}
                  alt=""
                />
              </ImageContainer>
              <RightArrowButton onClick={handleNextSlide}>{">"}</RightArrowButton>
            </SlideWrapper>
            <BubbleWrapper>
              {images.map((image, index) => (
                <Bubble
                  key={index}
                  active={index === currentSlide}
                  onClick={() => handleBubbleClick(index)}
                />
              ))}
            </BubbleWrapper>
          </SliderWrapper>
      );
      };
      
      export default Slider;
      
      
      
      
      