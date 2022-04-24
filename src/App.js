import React, {useState} from "react";
import Spells from "./components/Spells"
import SpellCard from "./components/SpellCard"
import './App.css';

function App() {
    const [spellID, setSpellID] = useState();
    const [spell, setSpell] = useState({})
  return (
    <div className="App">
      <div className="list">
        <h2 onClick={() => {console.log(spell)}}>Spells list</h2>
        <Spells setSpellID={setSpellID} setSpell={setSpell}/>
      </div>
      <div className="detailCard">
        <h3>Selected spell</h3>
        <SpellCard spell={spell}/>
      </div>
    </div>
  );
}


export default App;
