import { Card, Row, Col } from "antd";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

interface apicall {
  list: { ID: string; name: string }[];
}

export default function MyRowCall(prop: apicall) {
  const location = useLocation();
  return (
    <>
      {prop.list.map((el, index) => (
        <div key={index}>
          <Row>
            <Col span={8}></Col>
            <Link to={`${location.pathname}/${el.name.toLowerCase()}`}>
              <Col span={8}>
                <Card style={{ width: 200, margin: 15 }}>{el.name}</Card>
              </Col>
            </Link>
            <Col span={8}></Col>
          </Row>
        </div>
      ))}
    </>
  );
}
