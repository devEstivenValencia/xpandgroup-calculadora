import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="flex items-center justify-center min-h-screen bg-brand/25">
      <App />
    </main>
  </React.StrictMode>
);
