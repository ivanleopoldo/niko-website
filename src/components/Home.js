import React, { useState } from 'react';
import {
  AlertOutlined,
  CalendarOutlined,
  HeatMapOutlined,
  LaptopOutlined,
  MailOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout as AntLayout, Menu, theme } from 'antd';
import { IconMap } from 'antd/es/result';
import { icons } from 'antd/es/image/PreviewGroup';
import Icon from '@ant-design/icons/lib/components/Icon';

const { Header, Content, Sider } = AntLayout;

export function Home() {
  const [selectedItem, setSelectedItem] = useState('Home');

  const items1: MenuProps['items'] = ['Home', 'Jobs', 'Search'].map((key) => ({
    key,
    label: `${key}`,
  }));

  const items2: MenuProps['items'] = [
    {
      key: 'Profile',
      icon: <UserOutlined />,
      label: 'Profile',
      children: [
        {
          key: '1',
          label: 'Settings',
        },
        {
          key: '2',
          label: 'Privacy',
        },
        {
          key: '3',
          label: 'Security',
        },
      ],
    },
    {
      key: 'Notification',
      icon: <NotificationOutlined />,
      label: 'Notifications',
      children: [
        {
          key: '1',
          icon: <MessageOutlined />,
          label: 'Message',
        },
        {
          key: '2',
          icon: <CalendarOutlined />,
          label: 'Calendar',
        },
      ],
    },
    {
      key: '1',
      icon: <HeatMapOutlined />,
      label: 'Map',
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntLayout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} items={items1} />
      </Header>
      <AntLayout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <AntLayout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {selectedItem === 'Search' ? (
              <div>
                <input type="text" placeholder="Search" />
              </div>
            ) : (
              <div>{selectedItem}</div>
            )}
          </Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
}

export default Home;