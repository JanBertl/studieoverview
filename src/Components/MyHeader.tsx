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
        <Menu mode="horizontal" className="menuitem">
          <Menu.Item key="Overview">Overview</Menu.Item>
          <Menu.Item key="Ansicht:">
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
          <Menu.Item key="Overview" className="menuitem">
            <Input placeholder="Search" />
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default MyHeader;
