import { ReactDOM } from "react";
import { Card, Space, Row, Col } from "antd";
import MyRow from "./MyRow";

export default function Ingeneieurw() {
  return (
    <>
      <MyRow
        obj={{
          Inhalt: [
            "Automatisierungstechnik",
            "Bauingenieurwesen und Architektur",
            "Elektrotechnik",
            "Feinwerktechnik",
            "Informatik",
            "Landschaftsarchitektur",
            "Maschinenbau",
            "Materialwissenschaft und Werkstofftechnik",
            "Metallurgie",
            "Montanwissenschaften",
            "Städtebau / Stadtplanung",
            "Verfahrenstechnik",
            "Verkehrswissenschaften",
          ],
        }}
      ></MyRow>
    </>
  );
}

//
//obj: { Inhalt: string[] };
