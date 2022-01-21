import axios from "axios";
import { useEffect, useState } from "react";
import MyRowCall from "../../../MyRowCall";
import MyRow from "../../MyRow";

export default function Sozialwissenschaften() {
  const [state, setState] = useState([{ ID: "Loading", name: "loading" }]);

  useEffect(() => {
    async function getData() {
      let result = await axios.get(
        "http://localhost:4004/service-course/sozialwissenschaften"
      );
      let sortedData = result.data.value.sort(function (
        a: { ID: string; name: string },
        b: { ID: string; name: string }
      ) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        // Reihenfolge bleibt gleich, x steht im Alphabet weiter vorne
        if (x < y && !(x == "sonstige")) {
          return -1;
        }
        //Sozialwissenschaften, eine Position höher
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setState(sortedData);
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
