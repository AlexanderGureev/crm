import React from 'react';
import { HomeContainer } from './styles';
import { Auth } from '../../components/Authentication';

const Home = () => {
  return (
    <HomeContainer>
      <Auth />
    </HomeContainer>
  );
};

export { Home };
