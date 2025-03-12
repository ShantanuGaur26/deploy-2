import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");

  return (
    <>
      <button
        onClick={async () => {
          try {
            const response = await axios.get("https://deploy-be-dusky.vercel.app/");
            setOutput(response.data); // Assuming the response contains a string or valid data
          } catch (error) {
            console.error("Error fetching data:", error);
            setOutput("Error fetching data");
          }
        }}
      >
        Click
      </button>
      <h1>{output}</h1>
    </>
  );
}

export default App;
