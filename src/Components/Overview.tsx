import { ReactDOM } from "react";
import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Card, Space, Row, Col } from "antd";
import MyRow from "./MyRow";
import { Link } from "react-router-dom";

function Overview(props: React.HTMLAttributes<HTMLDivElement>) {
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
            ],
          }}
        ></MyRow>
      </Space>
    </>
  );
}
export default Overview;

// Wissenschaften als Karten untereinander dargestellt, wenn auf eine gedrückt, weiterleitens
