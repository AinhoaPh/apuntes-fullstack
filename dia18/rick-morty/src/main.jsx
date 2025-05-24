import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Uso React v7 en  modo Declarativo
import {BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
  <App />
</BrowserRouter>
  </StrictMode>
);