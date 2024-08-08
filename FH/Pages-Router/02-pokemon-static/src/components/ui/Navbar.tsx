import { Image, Spacer } from "@nextui-org/react";

export const Navbar = () => {
  return (
    <div className="flex w-100 flex-row items-center justify-start px-0 py-1 bg-gray-900">
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Icono de la app" className="w-20 h-20"/>
    <p className="text-white text-4xl">P</p>
    <p className="text-white text-base">okemon</p>
    <Spacer className="flex-1"/>
    <p className="text-white text-base" >Favoritos</p>
    </div>
  );
};
