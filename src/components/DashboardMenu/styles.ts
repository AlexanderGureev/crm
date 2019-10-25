import styled from 'styled-components';
import { Menu as AntdMenu, Icon as AntdIcon } from 'antd';
import { MenuLink } from '../MenuLink';
import { MenuType } from './types';

export const Menu: MenuType = styled(AntdMenu)`` as any;
const MenuItem: MenuType['Item'] = styled(AntdMenu.Item)`` as any;

Menu.Item = MenuItem;
Menu.Link = styled(MenuLink)`
  && {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
  }
`;
Menu.Text = styled.span`
  font-size: 16px;
  padding-left: 5px;
`;
Menu.Icon = styled(AntdIcon)`
  font-size: 20px !important;
`;
