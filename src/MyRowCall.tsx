import { Card, Row, Col, Button } from "antd";
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
          <Link
            className="link"
            to={`${location.pathname}/${el.name.toLowerCase()}`}
          >
            <Card
              style={{
                width: 200,
                marginTop: 15,
                marginBottom: 15,
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {el.name}
            </Card>
            {/* <button className="butt">{el.name}</button> */}
          </Link>
        </div>
      ))}
    </>
  );
}
