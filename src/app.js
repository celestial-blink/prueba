import React from 'react';
import ReactDOM from 'react-dom';
import RoutesApp from './routes/RoutesApp';

import './app.css';

ReactDOM.render(<RoutesApp/>, document.querySelector("#app"));

if (module.hot){
    module.hot.accept();
}