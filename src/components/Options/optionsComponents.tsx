// components to be rendered to /options after user is logged in
import { useState } from "react";
import CreateQuestionsBox from "./CreateParentBox";
import PracticeQuestionsBox from "./PracticeQuestions";

// Answer Questions box (with behavioral/technical button)
function AnswerQuestions() {
  return (
    <div style={{fontFamily: "fantasy"}}>
      <div>
        <h1>What would you like to do today?</h1>
      </div>
      <div style={{display: "flex"}}>
      <div style={{
      justifyContent: "left", 
      paddingTop: '100px', 
      paddingBottom: '100px', 
      paddingRight: '100px', 
      paddingLeft: '5px'}}>
       {CreateQuestionsBox()} 
      </div>
      <div style={{
      justifyContent: "right", 
      paddingTop: '100px', 
      paddingBottom: '100px', 
      paddingRight: '100px', 
      paddingLeft: '5px'}}>
        {PracticeQuestionsBox()}
        </div>
      </div>
    </div>
  )
}


export default AnswerQuestions;