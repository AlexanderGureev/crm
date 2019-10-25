import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'antd/dist/antd.css';

import App from './App';

const render = (Component: React.FC) => {
  //tslint:disable-next-line
  return ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./App.tsx', () => {
      render(App);
    });
  }
}
