"use client";

import { useParams } from "next/navigation";
import React from "react";

function Detail() {
  const { id } = useParams();

  return <div>Detail {id}</div>;
}

export default Detail;
