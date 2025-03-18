
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateQuestionsBox () {
    const navigate = useNavigate();
  
    const HandleCreateBehavioral = () => {
      navigate('/createBehavioral');  
    }
  
    const HandleCreateTechnical = () => {
      navigate('/createTechnical');
    }

    return (
      <div style={{
        width: '400px', 
        height: '200px', 
        backgroundColor: 'white', 
        border: 'solid', 
        borderRadius: '8px'}}>
          <div>
          <h2>
          create flashcards!
          </h2>  
      </div>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-around" }}>
      <div style={{
        paddingTop: '50px'
        }}>
        <button onClick={HandleCreateBehavioral}>Behavioral</button>
      </div>
      <div style={{
        paddingTop: '50px'
      }}>
        <button onClick={HandleCreateTechnical}>Technical</button>
      </div>
      </div>
      </div>
    )
  }
  
  export default CreateQuestionsBox;