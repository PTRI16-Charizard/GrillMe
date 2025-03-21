import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        backgroundColor: "lightred",
        color: "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "medium",
        marginTop: "20px",
      }}
    >
      Back
    </button>
  );
};

export default BackButton;