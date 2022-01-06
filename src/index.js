import React from 'react';
import ReactDOM from 'react-dom';
//importando as rotas
import Routes from './routes';

import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
document.getElementById('root')
);


