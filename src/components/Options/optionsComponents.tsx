// components to be rendered to /options after user is logged in
import { useState } from "react";
import CreateQuestionsBox from "./CreateParentBox";
import PracticeQuestionsBox from "./PracticeQuestions";
import CreateCustomQuestionsBox from "./CreateCustomQuestionsBox";
import { googleLogout } from "@react-oauth/google";

// Answer Questions box (with behavioral/technical button)
const AnswerQuestions: React.FC = () => {

  const handleLogout = () => {
    console.log('User logged out');
    localStorage.removeItem('ID');
    window.location.href = '/';
  }

  return (
    <div style={{ fontFamily: "Papyrus" }}>
      <div>
        <h1>What would you like to do today?</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            justifyContent: "left",
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingRight: "100px",
            paddingLeft: "5px",
          }}
        >
          {CreateQuestionsBox()}
        </div>
        <div
          style={{
            justifyContent: "right",
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingRight: "100px",
            paddingLeft: "5px",
          }}
        >
          {PracticeQuestionsBox()}
        </div>
      </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // paddingTop: "0px",
            // paddingBottom: "50px",
            paddingRight: "100px",
            paddingLeft: "5px"
          }}>
          {CreateCustomQuestionsBox()}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingRight: '100px',
          paddingLeft: '5px',
          margin: '50px'
        }}>
          <button 
          onClick={handleLogout}  
          style={{
            display: 'flex',
            width: '90px',
            // height:'60px',
            justifyContent:"center",
            textAlign: 'center',
            padding: '0px',
            // color:"",
          }}>
            {/* <img src="https://img.icons8.com/?size=40&id=44001&format=png&color=000000" alt="LogOut" /> */}
            <p>
              
            Logout
            </p>
          </button>
        </div>
    </div>
  );
};

export default AnswerQuestions;
