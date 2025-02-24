import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './ThemeContext';

//Se importa y envuelve toda la aplicación dentro de <ThemeProvider>,
// asegurando que ThemeContext esté disponible en todos los componentes dentro de App.

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
