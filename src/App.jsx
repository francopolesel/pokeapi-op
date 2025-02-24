import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`d-flex justify-content-center align-items-center text-center w-100 min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="p-5 rounded shadow w-100" style={{
        backgroundColor: theme === 'dark' ? '#333' : 'rgba(255, 255, 255, 0.9)', 
        minHeight: '50vh'
      }}>
        <h1 className="fw-bold mb-4" style={{
          color: theme === 'dark' ? '#FFD700' : '#DC143C'
        }}>
          ¡Bienvenido a la PokeAPI!
        </h1>
        <p className="lead">Explorá el mundo de Pokémon con nuestra API interactiva.</p>
        <button className="btn btn-primary mt-3 px-4 py-2 fw-bold" onClick={toggleTheme}>
          {theme === 'dark' ? 'Modo Claro 🔆' : 'Modo Oscuro 🌙'}
        </button>
      </div>
    </div>
  );
};

export default App;
