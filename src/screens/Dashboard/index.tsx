import React, { useState } from 'react';
import {
  DashboardContainer,
  Layout,
  Header,
  CloseIcon,
  ContentContainer,
  Sider
} from './styles';
import { DashboardMenu } from '../../components/DashboardMenu';
import { Switch, Route } from 'react-router-dom';
import { ClientsPage } from '../ClientsPage';
import { PaymentsPage } from '../PaymentsPage';
import { DashboardPage } from '../DashboardPage';
import { Props } from './types';

const Dashboard: React.FC<Props> = props => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <DashboardContainer>
      <Layout>
        <Sider width="250" trigger={null} collapsible collapsed={collapsed}>
          <DashboardMenu />
        </Sider>
        <Layout>
          <Header>
            <CloseIcon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <ContentContainer>
            <Switch>
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route path="/dashboard/clients" component={ClientsPage} />
              <Route path="/dashboard/payments" component={PaymentsPage} />
            </Switch>
          </ContentContainer>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
};

export { Dashboard };
