import { useState } from 'react';
import { getRandomPokemon } from '../services/pokeService';

const usePokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        console.log("Se entró al hook usePokemon");
        setLoading(true);
        setError(null);
        try {
            console.log("Se está solicitando un Pokémon");
            const data = await getRandomPokemon();
            setPokemon({
                name: data.species.name,
                image: data.sprites.front_shiny
            });
            console.log("Se obtuvo el Pokémon: ", data.species.name);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { pokemon, loading, error, fetchPokemon };
};

export default usePokemon;
