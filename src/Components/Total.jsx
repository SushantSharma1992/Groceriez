import React from "react";
import useTotal from "../CustomHooks/useTotal";

export default function Total() {
  const total = useTotal();
  return <div className="item center font-xl sticky-top">Total : {total}</div>;
}
