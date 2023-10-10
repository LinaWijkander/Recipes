import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {Navbar} from "./components/organisms/Navbar";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div>Index</div>
      <BrowserRouter>
          <Navbar/>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
