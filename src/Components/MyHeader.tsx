import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Button, Menu, Layout, Space, Input } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const { Header, Footer, Sider, Content } = Layout;

function MyHeader() {
  document.getElementById("searchbar")?.addEventListener("keyup", (content) => {
    console.log(content);
  });

  return (
    <>
      <Header>
        <Menu mode="horizontal" className="menuitem">
          <Menu.Item>Overview</Menu.Item>
          <Menu.Item key="Ansicht:">
            <Space>
              Ansicht:
              <Link to="/overview">
                <Button type="primary" size="small">
                  Auswahl
                </Button>
              </Link>
              <Button type="primary" size="small">
                <Link to="/diagramm">Diagramm</Link>
              </Button>
            </Space>
          </Menu.Item>
          <Menu.Item className="menuitem">
            <Input id="searchbar" placeholder="Search" />
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default MyHeader;
