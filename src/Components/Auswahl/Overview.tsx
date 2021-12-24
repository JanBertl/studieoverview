import "antd/dist/antd.css";
import "../../App.css";
import "../../index.css";
import { Card, Space, Row, Col } from "antd";
import MyRow from "../MyRow";
import { useState } from "react";
import axios from "axios";
import MyRowCall from "../../MyRowCall";

function Overview(props: React.HTMLAttributes<HTMLDivElement>) {
  const [science, setScience] = useState<{ ID: string; name: string }[]>([
    { ID: "bli", name: "blu" },
  ]);
  async function getData() {
    const result = await axios.get(
      "http://localhost:49892/service-course/overview"
    );
    setScience(result.data.value);
    return result;
  }
  getData();
  return (
    <>
      <Space align="center" direction="vertical">
        <MyRowCall list={science} />
      </Space>
    </>
  );
}
export default Overview;
