import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function SelectImage() {
  const [selectImg, setSelectImg] = useState(
    "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );
  return (
    <>
      <img src={selectImg} alt="img" className="big-img" />
      <div className="thumbnails">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt="img"
              onClick={() => setSelectImg(image)}
            />
          );
        })}
      </div>
      <style jsx>
        {`
          .big-img {
            width: 300px;
            height: 300px;
            object-fit: cover;
          }
          .thumbnails img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin: 5px 3px;
          }
        `}
      </style>
    </>
  );
}

export default SelectImage;
