import React, { useState } from "react";
import Form from "../components/Form";

export default function Spells(props) {
  const [spells, setSpells] = useState([]);
  const [spellType, setSpellType] = useState([]);


  const spellsListing = function getSpells() {
    fetch("https://wizard-world-api.herokuapp.com/Spells")
      .then((res) => res.json())
      .then((data) => {
        let spellsArr = [];
        let spellsTp = [];
        // //console.log(spellName)
        for (let i = 0; i < data.length; i++) {
          spellsArr.push(data[i]);
          
          if(!spellsTp.includes(data[i].type)){
            spellsTp.push(data[i].type);
          }

          setSpells(spellsArr);
          setSpellType(spellsTp);
        // console.log(input)
      }
      
    })};

  //   function spellsReverse() {
  //   let spellsReverse = spells;
  //   for (let i = spellsReverse.length - 1; i > 0; i -= 1) {
  //     spellsReverse.shift();
  //     spellsReverse.push(i);
  //   }
  //   return spellsReverse;
  // }

  function handleClick(obj) {
    console.log(spellType);
    props.setSpellID(obj.id);
    props.setSpell(obj);
    }

  return (
    <div>
      {/* <Form/> */}
      <br/><button onClick={spellsListing}>Accio!</button>
      {/* <br/><button onClick={spellsReverse}>Reverse Accio!</button> */}
      <div className="listBox">
        {spells.length > 0
          ? spells.map((obj) => (
              <p key={obj.id} onClick={handleClick.bind(this, obj)}>
                {obj.name}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
