import React, {useState} from "react";
import Spells from "./components/Spells"
import SpellCard from "./components/SpellCard"
import './App.css';

function App() {
    const [spellID, setSpellID] = useState();
  return (
    <div className="App">
      <div className="list">
        <h2>Spells list</h2>
        <Spells setSpellID={setSpellID}/>
      </div>
      <div className="detailCard">
        <h3>Selected spell</h3>
        <SpellCard/>
      </div>
    </div>
  );
}


export default App;
