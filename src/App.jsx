import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// Se importa useContext para acceder a los valores del contexto definido en ThemeContext.
// useContext es un hook que permite consumir valores globales sin necesidad de pasar props manualmente por cada componente.

const App = () => {
  // Se utiliza useContext para extraer 'theme' y 'toggleTheme' del ThemeContext,
  // permitiendo acceder y modificar el estado global del tema en la aplicación.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // Se utiliza el valor de 'theme' para asignar clases dinámicas que definen el estilo del fondo y el texto.
    <div className={`d-flex justify-content-center align-items-center text-center w-100 min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="p-5 rounded shadow w-100" style={{
        // Se define el color de fondo de forma dinámica según el valor actual de 'theme'.
        backgroundColor: theme === 'dark' ? '#333' : 'rgba(255, 255, 255, 0.9)', 
        minHeight: '50vh'
      }}>
        <h1 className="fw-bold mb-4" style={{
          // Se establece el color del título de manera dinámica basado en el tema seleccionado.
          color: theme === 'dark' ? '#FFD700' : '#DC143C'
        }}>
          ¡Bienvenido a la PokeAPI!
        </h1>
        <p className="lead">Explorá el mundo de Pokémon con nuestra API interactiva.</p>
        <button className="btn btn-primary mt-3 px-4 py-2 fw-bold" onClick={toggleTheme}>
          {/* Al hacer clic, se ejecuta 'toggleTheme', alternando entre los temas 'light' y 'dark'. */}
          {theme === 'dark' ? 'Modo Claro 🔆' : 'Modo Oscuro 🌙'}
        </button>
      </div>
    </div>
  );
};

export default App;
