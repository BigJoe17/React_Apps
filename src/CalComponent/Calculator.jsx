import React, { useState } from "react";
import "./cal.css";
import Button from "./Button";

function Calculator({}) {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");

  
  //   const inputHandler = (e) => {
  //     if (answer === "invalid Input!") return;
  //     let val = e.target.textContent;

  //     let str = input + val;
  //     if(str.length > 14 ) return;

  //     if(answer !== ""){
  //         setInput(answer + val);
  //         setAnswer("");
  //     }
  //     else{
  //         setAnswer(str);
  //     }
  //   };

  return (
    <>
      <div className="cal-body">
        <h2>CalculatorApp</h2>
        <input
          type="text"
          className="input"
          placeholder="0"
          maxLength={12}
          value={value}
        />
        <Button value={value} setValue={setValue} />
      </div>
    </>
  );
}

export default Calculator;
