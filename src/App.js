import "./App.css";
import "antd/dist/antd.css";

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import Home from "./components/home/Home";

import { Layout } from "antd";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginPage } from "./components/loginPage/LoginPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      console.log(`isLogin`, isLogin);
      history.push("/login");
    }
  }, [isLogin]);

  if (!isLogin) {
    return (
      <Route exact path="/login">
        <LoginPage setIsLogin={setIsLogin} />
      </Route>
    );
  }

  return (
    <>
      <Switch>
        <Layout className="layout">
          <NavHeader />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="app">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/list">
            <Home />
          </Route>
          <Route exact path="/app">
            <Home />
          </Route>

          <WebsiteFooter />
        </Layout>
      </Switch>
    </>
  );
};

export default App;
