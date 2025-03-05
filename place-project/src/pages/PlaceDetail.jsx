import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import Button from "../components/Button";
import Place from "../components/Place";
import { data } from "../data";

function PlaceDetail() {
  const { id } = useParams();
  const idInte = parseInt(id);
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <Heading title="Place Detail" />
      <Button
        text="Go Back"
        startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
      ></Button>
      <div className="flex justify-center mt-10">
        <Place place={data[idInte - 1]}></Place>
      </div>
    </div>
  );
}

export default PlaceDetail;
