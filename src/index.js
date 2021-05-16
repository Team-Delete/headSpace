import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { Auth0Provider } from '@auth0/auth0-react';
=======
>>>>>>> dev

ReactDOM.render(
  <Auth0Provider
    domain="dev-fb0m2j2w.us.auth0.com"
    clientId="9JyXbJ5IFKnPJ00JY9i73yY3mTWFDMdv"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
