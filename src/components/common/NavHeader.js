import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const { Header } = Layout;

function NavHeader() {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Link to="/">
                    <Menu.Item key="1">Home</Menu.Item>
                </Link>
            </Menu>
        </Header>
    );
}

export default NavHeader;
