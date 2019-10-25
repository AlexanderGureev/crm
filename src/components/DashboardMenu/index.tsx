import React, { useState } from 'react';
import { Icon } from 'antd';
import { Menu } from './styles';
import { useLocation } from 'react-router-dom';

const MenuKeys: { [key: string]: string } = {
  '/dashboard': '1',
  '/dashboard/clients': '2',
  '/dashboard/payments': '3'
};

const useActiveNavItem = () => {
  const { pathname } = useLocation();
  return MenuKeys[pathname];
};

const DashboardMenu: React.FC<any> = props => {
  const key = useActiveNavItem();

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[key]}>
      <Menu.Item key="1">
        <Menu.Icon type="home" />
        <Menu.Text>Главная</Menu.Text>
        <Menu.Link to="/dashboard" />
      </Menu.Item>
      <Menu.Item key="2">
        <Menu.Icon type="idcard" />
        <Menu.Text>Клиенты</Menu.Text>
        <Menu.Link to="/dashboard/clients" />
      </Menu.Item>
      <Menu.Item key="3">
        <Menu.Icon type="profile" />
        <Menu.Text>Платежи</Menu.Text>
        <Menu.Link to="/dashboard/payments" />
      </Menu.Item>
    </Menu>
  );
};

export { DashboardMenu };
