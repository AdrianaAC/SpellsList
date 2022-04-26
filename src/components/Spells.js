import React, { useState } from "react";

export default function Spells(props) {
  const [spells, setSpells] = useState([]);
  const [spellType, setSpellType] = useState([])
  const [checked, setChecked] = useState(false);
  // const [spellID, setSpellID] = useState();
  // const [input, setInput] = useState("ola");
  // let spellName = [];
  // let spellNameJSX = [];


  const spellsListing = function getSpells() {
    fetch("https://wizard-world-api.herokuapp.com/Spells")
      .then((res) => res.json())
      .then((data) => {
        let spellsArr = [];
        let spellsTp = [];
        // spellName = data.map(obj => obj.name)
        // //console.log(spellName)
        // return spellName
        for (let i = 0; i < data.length; i++) {
          spellsArr.push(data[i]);
          
          if(!spellsTp.includes(data[i].type)){
            spellsTp.push(data[i].type)
          }

          setSpells(spellsArr);
          setSpellType(spellsTp)
        // console.log(input)
      }
      
    })};
    function spellsReverse() {
    let spellsReverse = spells;
    for (let i = spellsReverse.length - 1; i > 0; i -= 1) {
      spellsReverse.shift();
      spellsReverse.push(i);
      
    }
    return spellsReverse;
  }

    // for(let i = 0; i<spellName.length; i++) {
    //     spellNameJSX.push(<p key={i} className="item">{spellName[i]}</p>)
    //     console.log(spellNameJSX)
    // }
  

  function handleClick(obj) {
    console.log(spellType)
    props.setSpellID(obj.id);
    props.setSpell(obj)
    
  }

  function handleChange(){
    setChecked(!checked)
  }

//   function SelectBox() {
//     return(
//     <div className="checkboxForm">

//         <label className="labelCheckbox">
//           All Types
//         <input
//           type="checkbox" id="charm" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Charm
//         <input
//           type="checkbox" id="charm" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Conjuration
//         <input
//           type="checkbox" id="conjuration" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Transfiguration
//         <input
//           type="checkbox" id="transfiguration" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Spell
//         <input
//           type="checkbox" id="spell" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Jinx
//         <input
//           type="checkbox" id="jinx" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Curse
//         <input
//           type="checkbox" id="curse" checked={checked}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="labelCheckbox">
//           Other
//         <input
//           type="checkbox" id="other" checked={checked}
//           onChange={handleChange}
//         />
//       </label>


//     </div>
// );
//   }
  

  return (
    <div>
      {/* <label>Search spell:</label>
      <input type="text" value={input} onInput={e => setInput(e.target.value)}
       placeholder="Name spell"></input> 
       <SelectBox/>*/}
       
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
