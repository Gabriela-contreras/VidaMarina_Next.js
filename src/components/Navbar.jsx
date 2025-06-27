import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 ">
      <nav className=" bg-white shadow-2xl fixed w-full ">
        <div className="flex justify-around items-center">
          <div className="text-gray-800 text-lg font-semibold">
            <img
            className="w-24 h-24"
              src="https://img.freepik.com/vector-premium/abstracto-turquesa-azul-azul-liquido-fondo-acuarela-marmol-lineas-doradas-pinceles_926199-3694486.jpg?semt=ais_items_boosted&w=740"
              alt=""
            />
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-800 hover:text-cyan-500">
                Inicio
              </Link>
            </li>
            <li>
              <a href="#nosotros" className="text-gray-800 hover:text-cyan-500">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#noticias" className="text-gray-800 hover:text-cyan-500">
                Noticias
              </a>
            </li>
            <li>
              <a href="#autoridades" className="text-gray-800 hover:text-cyan-500">
                Autoridades
              </a>
            </li>
            <li>
              <a href="https://wa.link/hlfjku" className="text-gray-800 hover:text-cyan-500">
                Contactame
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
