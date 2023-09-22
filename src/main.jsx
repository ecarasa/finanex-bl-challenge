import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap';
import App from './app';

import './index.scss'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
