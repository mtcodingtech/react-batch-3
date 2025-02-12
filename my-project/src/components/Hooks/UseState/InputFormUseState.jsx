import React, { useState } from "react";

function InputFormUseState() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <>
      <form>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
        <br />
        <label>Email</label>
        <input type="email" placeholder="Enter your email"
        onChange={(e) => {
            setForm({
                ...form,
                email: e.target.value
            })
        }} />
      </form>
      <p>firstName: {form.firstName}</p>
      <p>lastName: {form.lastName}</p>
      <p>email: {form.email}</p>
    </>
  );
}

export default InputFormUseState;
