import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {pokemons.map((p) => (
                <PokemonCard key={p.name} pokemon={p} />
            ))}
        </div>
    );
}

export default PokemonList;
