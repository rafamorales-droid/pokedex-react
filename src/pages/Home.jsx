import { useEffect, useState } from "react";
import { getPokemons } from "../api";
import PokemonList from "../components/PokemonList";
import Loader from "../components/Loader";

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await getPokemons(50, 0);
                setPokemons(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const filtered = pokemons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <Loader />;

    if (error) {
        return (
            <div className="bg-red-700 p-4 rounded">
                Error: {error}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Pokédex React</h1>
            <input
                type="text"
                placeholder="Buscar Pokémon..."
                className="w-full mb-4 p-2 rounded text-slate-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <PokemonList pokemons={filtered} />
        </div>
    );
}

export default Home;
