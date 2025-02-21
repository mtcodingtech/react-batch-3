import React, { useState } from "react";

function CRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };
  const deleteItem = (index) => {
    console.log("delete", index);
    setItems(items.filter((item, i) => i !== index));
  };

  const updateItem = (index) => {
    console.log("editText", editText)
    console.log("index", index)
    const updateItems = items.map((item, i) => i === index ? editText : item)
    console.log(updateItems)
    setItems(updateItems)
    setEditIndex(null)
  }
  return (
    <>
      <h2>CRUD (Create, Read, Update, Delete)</h2>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={handleAdd}>Add</button>
      <br></br>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {editIndex === index ? (
              <>
                <input type="text" onChange={(e) => setEditText(e.target.value)}/>
                <button onClick={() => updateItem(index)}>Update</button>
              </>
            ) : (
              <>
                <h4>{item}</h4>
                <button onClick={() => setEditIndex(index)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </>
            )}

            <hr />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default CRUD;
