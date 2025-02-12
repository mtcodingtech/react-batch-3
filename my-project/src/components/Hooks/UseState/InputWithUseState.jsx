import React, { useState } from "react";

function InputWithUseState() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={inputText} />
      <p>State: {inputText}</p>
      <button onClick={() => setInputText("")}>Reset</button>
    </>
  );
}

export default InputWithUseState;
