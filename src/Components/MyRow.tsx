import { ReactDOM } from "react";
import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Card, Space, Row, Col } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CardInterface } from "antd/lib/card";

interface rowType {
  obj: { Inhalt: string[] };
}
var components: JSX.Element[] = [];

export default function MyRow(props: rowType): JSX.Element {
  const navigate = useNavigate();
  function changeRoute2() {}
  components = props.obj.Inhalt.map((course, index) => (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Link to={props.obj.Inhalt[index].toLowerCase()}>
            <Card style={{ width: 200, margin: 15 }}>
              {props.obj.Inhalt[index]}
            </Card>
          </Link>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  ));
  return (
    <>
      {components.map((comp) => (
        <div>{comp}</div>
      ))}
    </>
  );
}
