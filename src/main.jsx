import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
