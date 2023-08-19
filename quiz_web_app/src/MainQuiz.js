import React, { useState } from 'react';
import styled from 'styled-components';
import QuizBar from './QuizBar';
import ProgressBar from './ProgressBar';
import { useLocation } from 'react-router-dom';
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';
import Question7 from './Questions/Question7';
import Question8 from './Questions/Question8';
import Question9 from './Questions/Question9';
import Question16 from './Questions/Question16';
import Question15 from './Questions/Question15';
import Question14 from './Questions/Question14';
import Question13 from './Questions/Question13';
import Question12 from './Questions/Question12';
import Question11 from './Questions/Question11';
import Question17 from './Questions/Question17';
import Question18 from './Questions/Question18';
import Question19 from './Questions/Question19';
import Question20 from './Questions/Question20';
import Question21 from './Questions/Question21';
import Question10 from './Questions/Question10';
import Question22 from './Questions/Question22';
import Question23 from './Questions/Question23';
import Question24 from './Questions/Question24';
import Question25 from './Questions/Question25';

const Container=styled.div`
flex-direction: column;
max-width: 400px;
display: flex;
margin-right: auto;
margin-left: auto;
`;


function QuestionContainer() {
  const location = useLocation();
    const { data } = location.state;
    const [showElement, setShowElement] = useState(true);
    const [showBar, setShowBar]=useState(true);
  
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const handleNextQuestion = () => {
      //turning off
      if(currentQuestion===16 || currentQuestion===21){
        setShowElement(!showElement);
        setShowBar(!showBar);
      }
      //turning on
      else if(currentQuestion===17 || currentQuestion===22){
        setShowElement(!showElement);
        setShowBar(!showBar);
      }
      else if(currentQuestion===23){
        setShowElement(!showElement);
      }
      setCurrentQuestion(currentQuestion + 1);      
    };

    const handleLastQuestion =()=>{
       if(currentQuestion===16 || currentQuestion===21){
        setShowElement(!showElement);
        setShowBar(!showBar);
      }
      //turning on
      else if(currentQuestion===17 || currentQuestion===22){
        setShowElement(!showElement);
        setShowBar(!showBar);
      }
      else if(currentQuestion===23){
        setShowElement(!showElement);
      }
      if(currentQuestion>1){
        setCurrentQuestion(currentQuestion - 1);
      }
      
    };
  
    let QuestionComponent;
    switch (currentQuestion) {
      case 1:
        QuestionComponent = Question1;
        break;
      case 2:
        QuestionComponent = Question2;
        break;
        case 3:
        QuestionComponent = Question3;
        break;
        case 4:
            QuestionComponent = Question4;
            break;
        case 5:
                QuestionComponent = Question5;
                break;   
         case 6:
        QuestionComponent = Question6;
        break;           
        case 7:
            QuestionComponent = Question7;
            break;
        case 8:
                QuestionComponent = Question8;
                break;
        case 9:
                    QuestionComponent = Question9;
                    break;  
         
                    case 10:
                      QuestionComponent = Question10;
                      break;  
                      case 11:
                    QuestionComponent = Question11;
                    break;  
                    case 12:
                    QuestionComponent = Question12;
                    break;  
                    case 13:
                    QuestionComponent = Question13;
                    break;  
                    case 14:
                    QuestionComponent = Question14;
                    break;  
                    case 15:
                    QuestionComponent = Question15;
                    break;  
                    case 16:
                    QuestionComponent = Question16;
                    break;  
                    case 17:
                    QuestionComponent = Question17;
                    break;  
                    case 18:
                    QuestionComponent = Question18;
                    break;  
                    case 19:
                    QuestionComponent = Question19;
                    break;  
                    case 20:
                    QuestionComponent = Question20;
                    break;  
                    case 21:
                    QuestionComponent = Question21;
                    break;  
                    case 22:
                    QuestionComponent = Question22;
                    break;  
                    case 23:
                    QuestionComponent = Question23;
                    break; 
                    case 24:
                    QuestionComponent = Question24;
                    break;
                    case 25:
                    QuestionComponent= Question25;
                    break;
      default:
        QuestionComponent = null;
        break;
    }
  
    return (
      <Container>
        {showBar && <QuizBar pageNumber={currentQuestion} onLast={handleLastQuestion}/> }
        {showElement && <ProgressBar pageNumber={currentQuestion}/>}
        {QuestionComponent && <QuestionComponent data={data} onNext={handleNextQuestion} />}
      </Container>
    )
}
  
  export default QuestionContainer;