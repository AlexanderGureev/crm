import styled from 'styled-components';
import { Layout as AntdLayout, Icon } from 'antd';

export const DashboardContainer = styled.div``;
export const Layout: typeof AntdLayout = styled(AntdLayout)`
  && {
    height: 100vh;
  }
` as any;

export const Header = styled(AntdLayout.Header)`
  && {
    padding: 0 20px;
    background-color: var(--white);
  }
`;

export const CloseIcon = styled(Icon)`
  font-size: 24px;
`;

export const ContentContainer = styled(AntdLayout.Content)`
  margin: 24px 16px;
  padding: 24px;
  background: var(--white);
  min-height: 280px;
`;

export const Sider = styled(AntdLayout.Sider)``;
