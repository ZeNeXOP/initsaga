import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'   // <--- Check this carefully
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
