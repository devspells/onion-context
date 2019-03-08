import React from "react";
import ReactDOM from "react-dom";

import App from './components/app';


document.body.insertAdjacentHTML('beforebegin', '<div id="root"></div>');

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
