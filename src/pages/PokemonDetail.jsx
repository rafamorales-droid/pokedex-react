import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../api";
import Loader from "../components/Loader";

function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                setLoading(true);
                const data = await getPokemonByName(name);
                setPokemon(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPokemon();
    }, [name]);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-slate-800 p-4 rounded-lg">
            <h1 className="text-2xl font-bold capitalize mb-4">
                {pokemon.name}
            </h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-32 h-32 mb-4"
            />
            <p>
                <span className="font-semibold">Altura:</span> {pokemon.height}
            </p>
            <p>
                <span className="font-semibold">Peso:</span> {pokemon.weight}
            </p>
            <p className="mt-2">
                <span className="font-semibold">Tipos:</span>{" "}
                {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
            <div className="mt-4">
                <h2 className="font-semibold mb-2">Stats</h2>
                <ul className="space-y-1">
                    {pokemon.stats.map((s) => (
                        <li key={s.stat.name}>
                            {s.stat.name}: {s.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PokemonDetail;
