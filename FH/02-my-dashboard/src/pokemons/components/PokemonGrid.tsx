import { SimplePokemon } from "..";
import { PokemonCard } from "./PokemonCard";

type Props = {
  pokemons: SimplePokemon[];
};

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemons={pokemon} />
      ))}
    </div>
  );
};
