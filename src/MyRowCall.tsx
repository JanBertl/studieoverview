// Ziel: <MyRowCall obj={science}></MyRowCall>

import { Card } from "antd";
import axios from "axios";
import { useState } from "react";

interface apicall {
  list: { ID: string; name: string }[];
}

export default function MyRowCall(prop: apicall) {
  return (
    <>
      {prop.list.map((el) => (
        <Card>{el.name}</Card>
      ))}
    </>
  );
}
