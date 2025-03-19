import { useState } from "react";
import { useNavigate } from "react-router";


 const PracticeQuestionsBox: React.FC = () => {
    
  const navigate = useNavigate();

  const HandlePracticeBehavioral = () => {
    navigate('/practiceBehavioral');
  }

  const HandlePracticeTechnical = () => {
    navigate('/practiceTechnical');
  }


    return (
      <div style={{
        fontFamily: "fantasy", 
        width: '400px', 
        height: '200px', 
        backgroundColor: 'white',
        border: 'solid', 
        borderRadius: '8px'}}>
          <div>
          <h2>
          practice flashcards!
          </h2>  
      </div>
      <div style={{ 
      display: "flex", 
      justifyContent: "space-around" }}>
      <div style={{
        paddingTop: '50px'
        }}>
        <button onClick={HandlePracticeBehavioral}>Behavioral</button>
      </div>
      <div style={{
        paddingTop: '50px'
      }}>
        <button onClick={HandlePracticeTechnical}>Technical</button>
      </div>
      </div>
      </div>
    )
  }

export default PracticeQuestionsBox;