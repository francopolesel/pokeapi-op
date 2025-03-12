import { useState } from 'react';
import { getRandomPokemon } from '../services/pokeService';

const usePokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getRandomPokemon();
            setPokemon({
                name: data.species.name,
                image: data.sprites.front_shiny
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { pokemon, loading, error, fetchPokemon };
};

export default usePokemon;
