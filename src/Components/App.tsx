import "antd/dist/antd.css";
import "../App.css";
import "../index.css";
import { Layout } from "antd";
import MyHeader from "./MyHeader";
import { Routes, Route, Router } from "react-router-dom";
import Overview from "./Auswahl/Overview";
import Diagramm from "./Digramm/Diagramm";
import MyFooter from "./MyFooter";
import MyBreadCrumb from "./MyBreadCrumb";
import Ingeneieurw from "./Auswahl/Ingenieurwissenschaften/Ingenieurw";
import Geisteswissenschaften from "./Auswahl/Geisteswissenschaften/Geisteswissenschaften";
import Humanwissenschaften from "./Auswahl/Humanwissenschaften/Humanwissenschaften";
import Rechtswissenschaften from "./Auswahl/Rechtswissenschaften/Rechtswissenschaften";
import Naturwissenschaften from "./Auswahl/Naturwissenschaften/Naturwissenschaften";
import Sozialwissenschaften from "./Auswahl/Sozialwissenschaften/Sozialwissenschaften";
import Wirtschaftswissenschaften from "./Auswahl/Wirtschaftswissenschaften/Wirtschaftswissenschaften";

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
            <Route path="/diagramm/*" element={<Diagramm />} />
            <Route
              path="/overview/ingenieurwissenschaften"
              element={<Ingeneieurw />}
            />
            <Route
              path="/overview/geisteswissenschaften"
              element={<Geisteswissenschaften />}
            />
            <Route
              path="/overview/humanwissenschaften"
              element={<Humanwissenschaften />}
            />
            <Route
              path="/overview/naturwissenschaften"
              element={<Naturwissenschaften />}
            />
            <Route
              path="/overview/rechtswissenschaften"
              element={<Rechtswissenschaften />}
            />
            <Route
              path="/overview/sozialwissenschaften"
              element={<Sozialwissenschaften />}
            />
            <Route
              path="/overview/wirtschaftswissenschaften"
              element={<Wirtschaftswissenschaften />}
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
