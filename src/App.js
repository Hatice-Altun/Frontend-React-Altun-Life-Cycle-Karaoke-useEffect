import React, { useState, useEffect } from "react";
import NameItem from "./components/NameItem";
import "./App.css";

function App() {
  const [activeName, setActiveName] = useState('');

  useEffect(() => {
    console.log("We gaan beginnen!");
  }, [])

  return (
      <>
        <h1>De actieve naam is: {activeName}</h1>
        <ul>
          <NameItem name="Hatice" activeName={activeName} setActiveName={setActiveName} />
          <NameItem name="Esther" activeName={activeName} setActiveName={setActiveName} />
          <NameItem name="Melisa" activeName={activeName} setActiveName={setActiveName} />
        </ul>
      </>
  );
}

export default App;
