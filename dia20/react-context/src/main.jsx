import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UserContextProvider} from './context/UserContext.jsx'
import {ThemeContextProvider} from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <UserContextProvider>
    <App />

    </UserContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
