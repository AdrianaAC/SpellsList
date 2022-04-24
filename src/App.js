import React from "react";
import Spells from "./components/Spells"
import SpellCard from "./components/SpellCard"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="list">
        <h2>Spells list</h2>
        <Spells/>
      </div>
      <div className="detailCard">
        <h3>Selected spell</h3>
        <SpellCard/>
      </div>
    </div>
  );
}


export default App;
