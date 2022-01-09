import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Card, Space, Row, Col } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

interface rowType {
  obj: { Inhalt: string[] };
}
var components: JSX.Element[] = [];

export default function MyRow(props: rowType): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  components = props.obj.Inhalt.map((course, index) => (
    <div key={index}>
      <Link
        to={`${location.pathname}/${props.obj.Inhalt[index].toLowerCase()}`}
      >
        <Card
          style={{
            width: 200,
            margin: 15,
          }}
        >
          {course}
        </Card>
      </Link>
    </div>
  ));
  return (
    <>
      {components.map((comp, index) => (
        <div key={index}>{comp}</div>
      ))}
    </>
  );
}
