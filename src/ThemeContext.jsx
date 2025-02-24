/* eslint-disable react/prop-types */
//useContext es un hook en React que permite compartir estado o funciones entre múltiples componentes sin necesidad de
//pasar props manualmente por cada nivel del árbol de componentes.
//Se usa junto con createContext para definir un contexto global.
import { createContext, useState } from 'react';

//Se crea el contexto con createContext(), que generará un objeto para compartir datos globalmente.
export const ThemeContext = createContext();

//Se crea un proveedor (ThemeProvider), que envolverá los componentes que necesitan acceder al contexto.
export const ThemeProvider = ({ children }) => {
    //Se define theme en el estado con useState('light').
  const [theme, setTheme] = useState('light');

  //toggleTheme cambia entre 'light' y 'dark'.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    //ThemeContext.Provider envuelve a los children, proporcionando { theme, toggleTheme } a cualquier componente que lo necesite.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
