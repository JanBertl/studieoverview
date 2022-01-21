import Face from "./Face";
import * as d3 from "d3";
import { select } from "d3-selection";
import { arc } from "d3";
import React, { useRef, useEffect } from "react";

export default function Diagramm() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const moutharc = arc().innerRadius(0);
  useEffect(() => {
    console.log(select(svgRef.current));
  });

  return (
    <>
      <div>test</div>
      <Face />
    </>
  );
}
