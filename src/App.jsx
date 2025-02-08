import { useState } from "react";
import "./App.css";
import AppInit from "./AppInit.jsx";
import PWABadge from "./PWABadge.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppInit />
      <PWABadge />
    </>
  );
}

export default App;
