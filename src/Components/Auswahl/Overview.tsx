import "antd/dist/antd.css";
import "../../App.css";
import "../../index.css";
import { Card, Space, Row, Col } from "antd";
import MyRow from "../MyRow";
import { useEffect, useState } from "react";
import axios from "axios";
import MyRowCall from "../../MyRowCall";

function Overview(props: React.HTMLAttributes<HTMLDivElement>) {
  const [science, setScience] = useState<{ ID: string; name: string }[]>([
    { ID: "bli", name: "Loading" },
  ]);
  useEffect(function () {
    async function getData() {
      const result = await axios.get(
        "http://localhost:4004/service-course/overview"
      );
      let sortedData = result.data.value.sort(function (
        a: { ID: string; name: string },
        b: { ID: string; name: string }
      ) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setScience(sortedData);
    }
    getData();
  }, []);

  return (
    <>
      <Space align="center" direction="vertical">
        <MyRowCall list={science} />
      </Space>
    </>
  );
}
export default Overview;
