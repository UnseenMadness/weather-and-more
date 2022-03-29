import * as React from "react";
import { useState } from "react";
import { Layout, Menu } from "antd";
import "./home.less";
import {
  LineChartOutlined,
  HeartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export const HomePage: React.FC = () => {
  const [sideNavCollapsed, setSideNavCollapsed] = useState<boolean>(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={sideNavCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<LineChartOutlined />}>
            <Link to="weather">Current weather</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}>
            <Link to="beers">Beers for weather</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            sideNavCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setSideNavCollapsed(!sideNavCollapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
