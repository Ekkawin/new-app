import "./App.css";
import "antd/dist/antd.css";

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import Home from "./components/home/Home";

import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Layout className="layout">
      <NavHeader />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="app">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/list">
          <Home />
        </Route>
        <Route path="/app">
          <Home />
        </Route>
      </Switch>
      <WebsiteFooter />
    </Layout>
  );
}

export default App;
