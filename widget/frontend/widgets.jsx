import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  ReactDOM.render(<Root/>, main);
});
