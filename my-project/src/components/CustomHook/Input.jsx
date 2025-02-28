import React from "react";
import useInput from "./UseInputHook";

function Input() {
  const [name, handleChange] = useInput("");
  const [email, handleChangeEmail] = useInput("");
  return (
    <>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <input type="email" value={email} onChange={handleChangeEmail} placeholder="Enter your email" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}

export default Input;
