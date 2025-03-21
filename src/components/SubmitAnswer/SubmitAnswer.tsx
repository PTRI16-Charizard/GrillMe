import { useState } from "react";
import { useParams } from "react-router-dom";

interface MyFormProps {
  apiUrl: string; // API endpoint for submitting data
}

function MyForm({ apiUrl }: MyFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const params = useParams(); // Get dynamic route params

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const data = { text: inputValue, id: params.id }; // Data to send

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Data submitted successfully!");
        setInputValue(""); // Clear input
      } else {
        setMessage("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setMessage("An error occurred.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your text"
        style={{
          color: "pastelblack",
          textAlign: "center",
          fontSize: "large",
          justifyContent: "center",
          margin: "50px",
          width: "600px",
          height: "150px",
          transition: "0.3s all",
          boxShadow: "5000px 4px 20px 0px rgba(0, 0, 0, 0.05)",
        }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default MyForm;
