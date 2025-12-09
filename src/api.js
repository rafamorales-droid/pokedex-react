const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(limit = 20, offset = 0) {
    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error("Error al obtener pokemons");
    return res.json();
}

export async function getPokemonByName(name) {
    const res = await fetch(`${BASE_URL}/pokemon/${name}`);
    if (!res.ok) throw new Error("Pokemon no encontrado");
    return res.json();
}
