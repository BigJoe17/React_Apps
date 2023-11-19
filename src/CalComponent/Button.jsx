// import React, { useState } from "react";

function Button({value,setValue}) {

   


  return (
    <>
      <div className="btn-display">
        <button className="btn clr" value="AC" onClick = {e=> setValue("")}>AC</button>
        <button className="btn clr" value="DE" onClick= {e=> setValue(value.slice(0,-1))}>DE</button>
        <button className="btn exp" value="."  onClick= {e=> setValue(value + e.target.innerText)}>.</button>
        <button className="btn exp" value="/" onClick= {e=> setValue(value + e.target.innerText)}>/</button>
        <button className="btn exp" value="*" onClick= {e=> setValue(value + e.target.innerText)}>*</button>
        <button className="btn exp" value="+" onClick= {e=> setValue(value + e.target.innerText)}>+</button>
        <button className="btn exp" value="-" onClick= {e=> setValue(value + e.target.innerText)}>-</button>
        <button className="btn exp" value="7" onClick = {e=> setValue(value + e.target.innerText)}>7</button>
        <button className="btn exp" value="8" onClick= {e=> setValue(value + e.target.innerText)}>8</button> 
        <button className="btn exp" value="9" onClick= {e=> setValue(value + e.target.innerText)}>9</button>
        <button className="btn exp" value="6" onClick= {e=> setValue(value + e.target.innerText)}>6</button>
        <button className="btn exp" value="5" onClick= {e=> setValue(value + e.target.innerText)}>5</button> 
        <button className="btn exp" value="4" onClick= {e=> setValue(value + e.target.innerText)}>4</button>
        <button className="btn exp" value="3" onClick= {e=> setValue(value + e.target.innerText)}>3</button>
        <button className="btn exp" value="2" onClick= {e=> setValue(value + e.target.innerText)}>2</button> 
        <button className="btn exp" value="1" onClick= {e=> setValue(value + e.target.innerText)}>1</button>
        <button className="btn exp" value="0" onClick= {e=> setValue(value + e.target.innerText)}>0</button>
        <button className="btn exp" value="00" onClick= {e=> setValue(value + e.target.innerText)}>00</button>
        <button className="btn exp equal" onClick= {e=> setValue(eval(value))}>=</button>
      </div>
    </>
  );
}

export default Button;
