// components/layout/sidebar.tsx
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const Sidebar = () => (
    <Layout.Sider>
        <Menu mode="inline" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about">About</Link>
            </Menu.Item>
            {/* Add more menu items as needed */}
        </Menu>
    </Layout.Sider>
);

export default Sidebar;
