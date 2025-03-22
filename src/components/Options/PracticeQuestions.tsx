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
        fontFamily: "papyrus", 
        width: '400px', 
        height: '200px', 
        backgroundColor: 'white',
        border: 'solid', 
        borderRadius: '8px'}}>
          <div>
          <h2>
          Practice your answers
          </h2>  
      </div>
      <div style={{ 
      display: "flex", 
      justifyContent: "space-around" }}>
      <div style={{
        paddingTop: '30px'
        }}>
        <button 
          onClick={HandlePracticeBehavioral}
          style={{
            width: '120px',
            height:'60px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.border = 'solid 1px black'}
          onMouseLeave={(e) => e.currentTarget.style.border = ''}
        >
          Behavioral
        </button>
      </div>
      <div style={{
        paddingTop: '30px'
      }}>
        <button 
         style={{
          width: '120px',
          height:'60px'
        }}
          onClick={HandlePracticeTechnical}
          onMouseEnter={(e) => e.currentTarget.style.border = 'solid 1px black'}
          onMouseLeave={(e) => e.currentTarget.style.border = ''}
          >
            Technical
          </button>
      </div>
      </div>
      </div>
    )
  }

export default PracticeQuestionsBox;