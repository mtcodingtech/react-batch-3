import React from "react";
import { useParams } from "react-router-dom";
import SimpleUseState from "../components/Hooks/UseState/SimpleUseState";
import InputWithUseState from "../components/Hooks/UseState/InputWithUseState";
import InputFormUseState from "../components/Hooks/UseState/InputFormUseState";
import SelectImage from "../components/Hooks/UseState/SelectImage";
import CRUD from "../components/Hooks/UseState/CRUD";
import DynamicBox from "../components/Hooks/UseState/DynamicBox";
import ComponentA from "../components/Hooks/PropsDrilling/ComponentA";
import SimpleUseEffect from "../components/Hooks/UseEffect/SimpleUseEffect";
import Clock from "../components/Hooks/UseEffect/Clock";
import APIData from "../components/Hooks/UseEffect/APIData";
import VideoPlayer from "../components/Hooks/UseRef/VideoPlayer";

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
          {/* <SelectImage /> */}
          {/* <CRUD /> */}
          {/* <DynamicBox /> */}
          <ComponentA />
        </>
      ) : id === "useEffect" ? (
        <>
          {/* <SimpleUseEffect /> */}
          <Clock />
          <APIData />
        </>
      ) : id === "useRef" ? (
        <>
          <VideoPlayer />
        </>
      ) : (
        <h2>Other</h2>
      )}
    </>
  );
}

export default HookDetail;
