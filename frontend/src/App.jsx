import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    try {
      // Make a POST request to localhost:5000 when button is clicked
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // You can include any data you want to send in the body
        body: JSON.stringify({ count: count }),
      });

      if (response.ok) {
        console.log("Request successful");
        setCount((count) => count + 4);
        // Perform any actions after the request is successful
      } else {
        setCount(0);
        console.error("Request failed");
        // Handle error if request fails
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that occur during the fetch operation
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            handleClick();
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
