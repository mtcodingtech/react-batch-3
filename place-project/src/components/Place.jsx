import React from "react";
import Button from "./Button";
import Map from "./Icon/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/placesSlice";

function Place({ place, isDetail }) {
  const { id, name, description, image, visited } = place;
  const btnStyle = isDetail ? "justify-center" : "justify-between";
  const dispatch = useDispatch();

  const toggleVisitedStatus = (id, visited) => {
    console.log("visited", visited)
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };
  
  return (
    <div className="bg-gray-100 p-5 rounded-xl text-center max-w-sm">
      <img src={image} alt="img" className="aspect-video object-cover " />
      <h3 className="font-bold text-xl mt-3">{name}</h3>
      <p>{description}</p>
      <h2 className="text-orange-600 font-bold mt-3 capitalize">
        {visited ? "visited" : "not visited"}
      </h2>
      <div className={`flex ${btnStyle} mt-5`}>
        <Button
          clickEvent={() => toggleVisitedStatus(id, visited)}
          text="Mark as visited"
          startIcon={<FontAwesomeIcon icon={faLocationDot} />}
        />
        {!isDetail ? (
          <Link to={`/${id}`}>
            <Button
              text="view detail"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Place;
