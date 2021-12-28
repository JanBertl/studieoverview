import axios from "axios";
import { useEffect, useState } from "react";
import MyRowCall from "../../../MyRowCall";
import MyRow from "../../MyRow";

export default function Ingeneieurw() {
  const [state, setState] = useState([{ ID: "Loading", name: "loading" }]);

  useEffect(() => {
    async function getData() {
      let result = await axios.get(
        "http://localhost:4004/service-course/ingenieurwissenschaften"
      );
      let arr = result.data.value;
      setState(arr);
    }
    getData();
  }, []);
  return (
    <>
      <MyRowCall list={state}></MyRowCall>
    </>
  );
}

//
//obj: { Inhalt: string[] };
