import axios from "axios";

const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 150) + 1;
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        console.log("Volviendo del service")
        return response.data;
    } catch (error) {
        console.error("Error al obtener el pokemon:", error);
        throw error;
    }
};

export { getRandomPokemon };
