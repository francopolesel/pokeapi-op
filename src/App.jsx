import  { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container py-3 ${theme === 'dark' ? 'bg-dark text-white' : ''}`}>
      <h1>Demo de useContext</h1>
      <button className="btn btn-primary" onClick={toggleTheme}>
        Cambiar Tema
      </button>
      {/* Aquí incluirás otros componentes */}
    </div>
  );
};

export default App;
