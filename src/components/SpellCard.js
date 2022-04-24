import React from "react";

export default function SpellCard(props) {

  return (
    <div className="spell-card">
      {/* <img/> */}
      <h3>{props.spell.name}</h3>
      <div className="info-group">
			  <p>Creator: {props.spell.creator}</p>
			  <p>Incantation: {props.spell.incantation}</p>
        <p>Effects: {props.spell.effect}</p>
				<p>Light: {props.spell.light}</p>
				<p>Type: {props.spell.type}</p>
      </div>
    </div>
  );
}
