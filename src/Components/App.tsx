import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Layout } from "antd";
import MyHeader from "./MyHeader";
import { Routes, Route, Router } from "react-router-dom";
import Overview from "./Auswahl/Overview";
import MyFooter from "./MyFooter";
import MyBreadCrumb from "./MyBreadCrumb";
import Ingeneieurw from "./Auswahl/Ingenieurwissenschaften/Ingenieurw";

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">
        <MyHeader />
        <MyBreadCrumb />
        <Content className="Contentt">
          <Routes>
            <Route path="/overview/*" element={<Overview />} />
            <Route
              path="/overview/ingenieurwissenschaften"
              element={<Ingeneieurw />}
            />
            <Route
              path="/overview/geisteswissenschaften"
              element={<div>placehold</div>}
            />
            <Route
              path="/overview/humanwissenschaften"
              element={<div>placehold</div>}
            />
            <Route
              path="/overview/rechtswissenschaften"
              element={<div>placehold</div>}
            />
            <Route
              path="/overview/geisteswissenschaften"
              element={<div>placehold</div>}
            />
            <Route
              path="/overview/geisteswissenschaften"
              element={<div>placehold</div>}
            />
            <Route
              path="/overview/sozialwissenschaften"
              element={<div>placehold</div>}
            />
            <Route
              path="/overview/wirtschaftswissenschaften"
              element={<div>placehold</div>}
            />
            <Route path="/overview/sonstige" element={<div>placehold</div>} />
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
