import React from "react";
import Button from "./Button";
import Map from "./Icon/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { Link } from "react-router-dom";

function Place({ place }) {
  const { id, name, description, image, visited } = place;
  return (
    <div className="bg-gray-100 p-5 rounded-xl text-center max-w-sm">
      <img src={image} alt="img" className="w-full h-48 object-cover " />
      <h3 className="font-bold text-xl mt-3">{name}</h3>
      <p>{description}</p>
      <h2 className="text-orange-600 font-bold mt-3 capitalize">
        {visited ? "visited" : "not visited"}
      </h2>
      <div className="flex justify-between mt-5">
        <Button
          text="Mark as visited"
          startIcon={<FontAwesomeIcon icon={faLocationDot} />}
        />
        <Link to={`/${id}`}>
          <Button
            text="view detail"
            endIcon={<FontAwesomeIcon icon={faArrowRight} />}
          />
        </Link>
      </div>
    </div>
  );
}

export default Place;
