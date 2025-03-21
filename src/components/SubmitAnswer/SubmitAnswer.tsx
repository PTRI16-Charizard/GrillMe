import { useState } from "react";

interface MyFormProps {
  apiUrl: string;
  question: string;
  category: string;
  user: string | undefined;
  preset: boolean;
}

function MyForm({ apiUrl, question, category, user, preset }: MyFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!inputValue.trim()) {  // check for empty answer
      setMessage("Answer cannot be empty!");
      return;
    }

    const data = { 
      question, 
      answer: inputValue, 
      category, 
      user, 
      preset 
    };
    // console.log("Submitting data:", data);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    //   console.log("Response status:", response.status); 
    //   const responseData = await response.json();
    //   console.log("Server response:", responseData); 

      if (response.ok) {
        setMessage("Answer submitted successfully!");
        setInputValue(""); // Clear input
      } else {
        setMessage("Failed to submit answer.");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      setMessage("An error occurred.");
    }

    setLoading(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your answer"
        style={{
          color: "pastelblack",
          textAlign: "center",
          fontSize: "large",
          justifyContent: "center",
          margin: "20px",
          width: "600px",
          height: "150px",
          transition: "0.3s all",
          boxShadow: "5000px 4px 20px 0px rgba(0, 0, 0, 0.05)",
        }}
      />
      <button type="submit" disabled={loading} style={{backgroundColor: "blue", color:"white"}}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default MyForm;
