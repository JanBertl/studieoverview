import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import { arc } from "d3";

export default function Face() {
  //   const svgRef = useRef<SVGSVGElement | null>(null);
  //   const moutharc = arc().innerRadius(0);
  //   useEffect(() => {
  //     console.log(select(svgRef.current));
  //   });
  return (
    <>
      <svg width="960" height="500">
        <circle
          cx="480"
          cy="250"
          r="245"
          fill="yellow"
          stroke="black"
          stroke-width="11"
        ></circle>
        <circle cx="375" cy=" 120" r="30"></circle>
        <circle cx="585" cy=" 120" r="30"></circle>
      </svg>
    </>
  );
}
