import "antd/dist/antd.css";
import "../../App.css";
import "../../index.css";
import { Card, Space, Row, Col } from "antd";
import MyRow from "../MyRow";
import { useState } from "react";
import axios from "axios";

function Overview(props: React.HTMLAttributes<HTMLDivElement>) {
  const [science, setScience] = useState<string>("");
  async function getData() {
    if (science) {
      return;
    }
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
        <MyRow
          obj={{
            Inhalt: [
              "Geisteswissenschaften",
              "Humanwissenschaften",
              "Ingenieurwissenschaften",
              "Rechtswissenschaften",
              "Sozialwissenschaften",
              "Wirtschaftswissenschaften",
              "Sonstige",
              science,
            ],
          }}
        ></MyRow>
      </Space>
    </>
  );
}
export default Overview;

// Wissenschaften als Karten untereinander dargestellt, wenn auf eine gedrückt, weiterleitens
