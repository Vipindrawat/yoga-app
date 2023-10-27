import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Allstates from '../context/Allstates.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Allstates>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Allstates>
  </BrowserRouter>
)
