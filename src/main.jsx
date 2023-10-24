import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { VideoInit } from './components/VideoInit'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <VideoInit/>
      <App/>
    </React.StrictMode>,
  </BrowserRouter>
)
