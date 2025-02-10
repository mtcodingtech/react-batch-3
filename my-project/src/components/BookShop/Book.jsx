import React from "react";
import { logoStyle } from "../../helpers/style";

function Book({item}) {
  return (
    <>
      <img
        style={{ objectFit: "cover", ...logoStyle }}
        src={item.img}
        alt={item.title}
      />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </>
  );
}

export default Book;
