import { useState } from "react";

interface EditFormProps {
  apiUrl: string;
  question: string;
  category: string;
  user: string | null;
  preset: boolean;
}

function EditForm({ apiUrl, question, category, user, preset }: EditFormProps) {
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
    console.log("Submitting data:", data);

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
        placeholder={message === 'Answer submitted successfully!' ? '' : 'Enter your answer'}
        disabled={message === 'Answer submitted successfully!'}
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
          overflow:"scroll"
        }}
      />
      {message === 'Answer submitted successfully!' ? (
        <p>{message}</p>
      ) : (
      <button type="submit" disabled={loading} style={{backgroundColor: "lightblue", color:"white"}}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      )
      }
      {/* {message && <p>{message}</p>} */}
    </form>
  );
}

export default EditForm;
