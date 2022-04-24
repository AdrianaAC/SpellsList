import React, { useState } from "react";

export default function Spells() {
    const [spells, setSpells] = useState([])
    
    // let spellName = [];
    // let spellNameJSX = [];

     const spellsListing = function getSpells() {
        fetch("https://wizard-world-api.herokuapp.com/Spells")
        .then(res => res.json())
        .then(data => {
            let spellsArr = [];
            // spellName = data.map(obj => obj.name)
            // //console.log(spellName)
            // return spellName
            for(let i = 0; i<data.length; i++){
                spellsArr.push(data[i])
              }
                          //console.log(spellsArr)
            setSpells(spellsArr)
        })
      
        
        // for(let i = 0; i<spellName.length; i++) {
        //     spellNameJSX.push(<p key={i} className="item">{spellName[i]}</p>)
        //     console.log(spellNameJSX)
        // }

    }

    function handleClick(id) {
        console.log(id)
    }


    return(
        <div>
            <input type="text"></input>
            <button onClick={spellsListing}>Get spells!</button>
            <div className="listBox">
                    {
                       spells.length > 0 ?  spells.map((obj) => <p key={obj.id} onClick={handleClick.bind(this, obj.id)}>{obj.name}</p>) : null
                    }
            </div>
        </div>
    )
    }