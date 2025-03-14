import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer
            className="p-3 text-center d-flex align-items-center justify-content-center"
            style={{
                backgroundColor: theme === 'dark' ? '#FFD700' : '#DC143C',
                color: theme === 'dark' ? '#000' : '#fff',
                height: '60px'
            }}
        >
            <p className="fs-5 mb-0">PokeAPI Franco Polesel - Demo Interactiva</p>
        </footer>
    );
};

export default Footer;