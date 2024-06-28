import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp"; // Import MainApp instead of individual pages
import "./index.css";

// Ensure you have an element with the ID 'root' in your index.html
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}