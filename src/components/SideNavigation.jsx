"use client";
import { CalendarOutlined, BellOutlined, TeamOutlined, BarsOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { createElement, useState } from "react";
import Link from "next/link";

const { Sider } = Layout;

const itemNames = ["CO/HO", "Notifications", "Users", "To-do List"];

const items = [CalendarOutlined, BellOutlined, TeamOutlined, BarsOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: itemNames[index],
  link: `/${itemNames[index].replace("/", "-").replace(" ", "-").toLowerCase()}`,
}));

const SideNavigation = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          margin: "16px",
          overflow: "initial",
          color: colorBgContainer
        }}
      >
        Logo
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} theme="dark">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link href={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideNavigation;
