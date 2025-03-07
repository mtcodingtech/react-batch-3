import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import Button from "../components/Button";
import Place from "../components/Place";
import { data } from "../data";
import { useSelector } from "react-redux";

function PlaceDetail() {
  const { id } = useParams();
  const idInte = parseInt(id);
  const navigate = useNavigate();
  const place = useSelector((state) => state.places.find(place => place.id === idInte));

  return (
    <div className="p-4">
      <Heading title="Place Detail" />
      <Button
        clickEvent={() => navigate(-1)}
   
        text="Go Back"
        startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
      ></Button>
      <div className="flex justify-center mt-10">
        <Place place={place} isDetail={true}></Place>
      </div>
    </div>
  );
}

export default PlaceDetail;
