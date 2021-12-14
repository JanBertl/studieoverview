import { ReactDOM } from "react";
import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Button, Menu, Layout, Space, Input } from "antd";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

function MyHeader() {
  return (
    <>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>Overview</Menu.Item>
          <Menu.Item>
            <Space>
              Ansicht:
              <Link to="/overview">
                <Button type="primary" size="small">
                  Auswahl
                </Button>
              </Link>
              <Button type="primary" size="small">
                Diagramm
              </Button>
            </Space>
          </Menu.Item>
          <Menu.Item>
            <Input placeholder="Search" style={{ width: "100%" }} />
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default MyHeader;
