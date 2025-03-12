import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [output, setOutput] = useState(""); // Store as a string instead of an object

  return (
    <>
      <button
        onClick={async () => {
          try {
            const response = await axios.get("https://deploy-be-dusky.vercel.app");
            setOutput(JSON.stringify(response.data, null, 2)); // Convert to string
          } catch (error) {
            console.error("Error fetching data:", error);
            setOutput("Error fetching data");
          }
        }}
      >
        Click
      </button>
      <pre>{output}</pre> {/* Use <pre> to format JSON output */}
    </>
  );
}

export default App;
