import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

const init = () => {
  render(<App />, document.querySelector('#app'));
};

export default init;
