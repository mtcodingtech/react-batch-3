import React, { useState } from "react";

function DynamicBox() {
  const [color, setColor] = useState("");
  return (
    <div>
      <div
        style={{
          width: 200,
          height: 200,
          outline: `10px dotted ${color}`,
          background: color,
          
        }}
      ></div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}

export default DynamicBox;
