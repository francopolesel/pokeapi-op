import { useContext, useState, useRef } from 'react';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getRandomPokemon } from './services/pokeService';

const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [pokemon, setPokemon] = useState(null);
    const clickCountRef = useRef(0);
    const [showCount, setShowCount] = useState(0);

    const handleGetPokemon = async () => {
        clickCountRef.current++;
        try {
            console.log("Llamando al service");
            const data = await getRandomPokemon();
            console.log("Seteando la información del pokemon", data.species.name);
            setPokemon({
                name: data.species.name,
                image: data.sprites.front_shiny
            });
        } catch (error) {
            console.error("Error al obtener pokemon:", error);
        }
    };

    const handleShowStats = () => {
        setShowCount(clickCountRef.current);
    };

    return (
        <div
            className={`d-flex flex-column min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}
        >
            <header className="d-flex justify-content-end p-3">
                <button
                    className="btn btn-primary fw-bold"
                    onClick={toggleTheme}
                >
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
                        Hacé click para obtener un Pokemon al azar!
                    </p>
                    <button
                        className="btn btn-success mt-3 px-4 py-2 fw-bold"
                        onClick={handleGetPokemon}
                    >
                        Obtener pokemon al azar
                    </button>
                    <button
                        className="btn btn-info mt-3 ms-2 px-4 py-2 fw-bold"
                        onClick={handleShowStats}
                    >
                        Ver estadísticas
                    </button>
                    <p className="mt-3">Total de Pokemon solicitados: {showCount}</p>
                    {pokemon && (
                        <div className="mt-4">
                            <h2 className="text-capitalize">{pokemon.name}</h2>
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                                className="img-fluid"
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;