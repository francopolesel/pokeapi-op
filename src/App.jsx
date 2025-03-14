import { useContext, useState, useRef } from 'react';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import usePokemon from './hooks/usePokemon';
import Footer from './Footer';

const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { pokemon, loading, error, fetchPokemon } = usePokemon();
    const clickCountRef = useRef(0);
    const [showCount, setShowCount] = useState(0);

    const handleGetPokemon = async () => {
        clickCountRef.current++;
        await fetchPokemon();
    };

    const handleShowStats = () => {
        setShowCount(clickCountRef.current);
    };

    return (
        <div className={`d-flex flex-column min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <header className="d-flex justify-content-end p-3">
                <button className="btn btn-primary fw-bold" onClick={toggleTheme}>
                    {theme === 'dark' ? 'Modo Claro 🔆' : 'Modo Oscuro 🌙'}
                </button>
            </header>
            <main className="flex-grow-1 d-flex justify-content-center align-items-center text-center">
                <div
                    className="p-5 rounded shadow w-75"
                    style={{
                        backgroundColor: theme === 'dark' ? '#333' : 'rgba(255, 255, 255, 0.9)',
                        minHeight: '50vh'
                    }}
                >
                    <h1
                        className="fw-bold mb-4"
                        style={{
                            color: theme === 'dark' ? '#FFD700' : '#DC143C'
                        }}
                    >
                        ¡Bienvenido a la PokeAPI!
                    </h1>
                    <p className="lead">
                        ¡Hacé click para obtener un Pokémon al azar!
                    </p>
                    <button className="btn btn-success mt-3 px-4 py-2 fw-bold" onClick={handleGetPokemon}>
                        Obtener Pokémon al azar
                    </button>
                    <button className="btn btn-info mt-3 ms-2 px-4 py-2 fw-bold" onClick={handleShowStats}>
                        Ver estadísticas
                    </button>
                    <p className="mt-3">Total de Pokémon solicitados: {showCount}</p>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Error al cargar el Pokémon</p>}
                    {pokemon && (
                        <div className="mt-4">
                            <h2 className="text-capitalize">{pokemon.name}</h2>
                            <img src={pokemon.image} alt={pokemon.name} className="img-fluid" />
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
