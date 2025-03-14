// Footer.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`p-3 text-center ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <p>PokeAPI Franco Polesel - Demo Interactiva</p>
    </footer>
  );
};

export default Footer;