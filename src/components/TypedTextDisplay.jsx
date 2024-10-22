import React, { useState } from "react";
import "./TypedTextDisplay.css";

function TypedTextDisplay({ typedText }) {

  return (
    <div className="typed-text-display">
      {typedText.map((charObj, index) => (
        <span key={index} style={{ color: charObj.color ,fontSize:charObj.size ,fontFamily:charObj.font}}>
          {charObj.char}
        </span>
      ))}
    </div>
  );
}

export default TypedTextDisplay;