import './App.css';
import 'antd/dist/antd.css';

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import Home from "./components/home/Home";

import {Layout} from 'antd';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
    return (
        <Router>
            <Layout className="layout">
                <NavHeader/>
                <Switch>
                    <Route path="/" exact components={Home}/>
                </Switch>
                <WebsiteFooter/>
            </Layout>
        </Router>
    );
}

export default App;
