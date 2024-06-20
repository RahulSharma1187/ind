import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './common.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-chtuopbwoioh430q.us.auth0.com"
      clientId="6s09qMy0AWGI9P08H0IfPZMjTMXZwwN1"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
)
