import { ReactDOM } from "react";
import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Button, Menu, Layout, Space, Input, Row, Col } from "antd";
import MyHeader from "./MyHeader";
import { Routes, Route, Router } from "react-router-dom";
import Overview from "./Overview";
import MyFooter from "./MyFooter";
import MyBreadCrumb from "./MyBreadCrumb";
import Ingeneieurw from "./Ingenieurw";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <MyHeader />
        <MyBreadCrumb />
        <Content>
          <Routes>
            <Route path="/overview*" element={<Overview />} />
            <Route
              path="/overview/ingenieurwissenschaften"
              element={<Ingeneieurw />}
            />
          </Routes>
        </Content>
        <MyFooter />
      </Layout>
    </>
  );
}

export default App;

//wie bekommen ich es fullscreen?
//wie zentrieren?
//Abstand zu Header/ Footer
//Wie macht man die Searchleiste auf Länge der Webseite
