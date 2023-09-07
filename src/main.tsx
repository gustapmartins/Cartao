import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import './Styles/global.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
