import React from "react";
import { useParams } from "react-router-dom";
import SimpleUseState from "../components/Hooks/UseState/SimpleUseState";
import InputWithUseState from "../components/Hooks/UseState/InputWithUseState";
import InputFormUseState from "../components/Hooks/UseState/InputFormUseState";
import SelectImage from "../components/Hooks/UseState/SelectImage";

function HookDetail() {
  const { id } = useParams();

  return (
    <>
      {id === "useState" ? (
        <>
          {/* <h2>UseState</h2>
          <SimpleUseState />
          <hr />
          <InputWithUseState />
          <hr /> */}
          {/* <InputFormUseState /> */}
          <SelectImage />
        </>
      ) : (
        <h2>Other</h2>
      )}
    </>
  );
}

export default HookDetail;
