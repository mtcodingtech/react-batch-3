import React, { useState } from "react";

function SimpleUseState() {
  const [word, setWord] = useState("Hello World");

  const changeWord = () => {
    setWord("React JS")
  }
  return (
    <>
      <p>{word}</p>
      <button onClick={changeWord}>Change word</button>
    </>
  );
}

export default SimpleUseState;
