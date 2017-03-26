import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App.js';
import Header from './header.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><Header /></App>, div);
});
