import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";
// import { notFound } from "next/navigation";

const metadata: Metadata = {
  title: "Pokemos Page",
  description: "Seccion de todos los pokemons",
};

const getPokemos = async (
  limit: number = 20,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Esto es algo que no deberia de suceder");
  // throw notFound();
  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemos(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>estaticos</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
       <PokemonGrid pokemons={pokemons}/>
      </div>
    </div>
  );
}
