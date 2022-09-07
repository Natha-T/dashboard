import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MoralisProvider  serverUrl="https://5qev7n6thbwt.usemoralis.com:2053/server" appId="lScnQgq7AnVwX1MtSvq7VfLJoLvQL5KQEihDmRsh">
    <App />
    </MoralisProvider>
  </React.StrictMode>
);

