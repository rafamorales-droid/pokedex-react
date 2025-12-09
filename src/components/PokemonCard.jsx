import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
    const idFromUrl = pokemon.url.split("/").filter(Boolean).pop();
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFromUrl}.png`;

    return (
        <Link
            to={`/pokemon/${pokemon.name}`}
            className="bg-slate-800 rounded-lg p-4 flex flex-col items-center hover:bg-slate-700 transition"
        >
            <img src={imgUrl} alt={pokemon.name} className="w-24 h-24 mb-2" />
            <h2 className="capitalize font-semibold">{pokemon.name}</h2>
        </Link>
    );
}

export default PokemonCard;
