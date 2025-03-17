import { useContext, useState, useRef } from 'react';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import usePokemon from './hooks/usePokemon';
import Footer from './Footer';

const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { pokemon, loading, error, fetchPokemon } = usePokemon();
    const [pokemonRequestCount, setPokemonRequestCount] = useState(0);
    const [isPokemonVisible, setIsPokemonVisible] = useState(true);
    const pokemonContainerRef = useRef(null);

    const handleGetPokemon = async () => {
        console.log("Se solicitó un Pokémon");
        await fetchPokemon();
        console.log("Ya tengo el Pokémon obtenido en App.jsx");
        setPokemonRequestCount(prevCount => prevCount + 1);
    };

    const togglePokemonVisibility = () => {
        if (pokemonContainerRef.current) {
            const currentDisplay = pokemonContainerRef.current.style.display;
            console.log("Se cambió el display de", currentDisplay, "a", currentDisplay === 'none' ? 'block' : 'none');
            pokemonContainerRef.current.style.display = currentDisplay === 'none' ? 'block' : 'none';
            setIsPokemonVisible(prev => !prev);
        }
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
                        height: pokemonRequestCount === 0 ? '50vh' : '75vh',
                        overflow: 'hidden'
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
                    <button
                        className="btn btn-success mt-3 px-4 py-2 fw-bold"
                        onClick={handleGetPokemon}
                    >
                        Obtener Pokémon al azar
                    </button>
                    {pokemonRequestCount > 0 && (
                        <button
                            className="btn btn-info mt-3 ms-2 px-4 py-2 fw-bold"
                            onClick={togglePokemonVisibility}
                        >
                            {isPokemonVisible ? 'Ocultar Pokémon' : 'Mostrar Pokémon'}
                        </button>
                    )}
                    <p className="mt-3">
                        Total de Pokémon solicitados: {pokemonRequestCount}
                    </p>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Error al cargar el Pokémon</p>}
                    {pokemon && (
                        <div ref={pokemonContainerRef} className="mt-4">
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
            <Footer />
        </div>
    );
};

export default App;
