import React from "react";
import Book from "./Book";

const items = [
  {
    id: 1,
    title: "Book 1",
    img: "https://images.pexels.com/photos/5490059/pexels-photo-5490059.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Book 1 description",
  },
  {
    id: 2,
    title: "Book 2",
    img: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Book 2 description",
  },
  {
    id: 3,
    title: "Book 3",
    img: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Book 3 description",
  },
];

function Books() {
  return (
    <>
      <div style={{display: "flex"}}>
        {items.map((item, index) => {
          return (
            <div key={index}>
                <Book item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Books;
