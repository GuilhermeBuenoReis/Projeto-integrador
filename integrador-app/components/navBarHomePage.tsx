import Perfil from './perfil';

import Link from 'next/link';

import React from 'react';

const NavBarHomePage = () => {
    return(
        <header className="h-12 w-full fixed top-0 left-0 ">
        <nav className="flex justify-between">
        <Link href={`/home`}>  
          <h1 className="ml-10 text-2xl text-white font-semibold items-center">EstrelaFlicks</h1>
        </Link>
          <ul className="flex justify-around items-center flex-row mr-10">
            <li className="mr-10 text-xl text-white ">
              <Link href="#">Filmes</Link>
            </li>
            <li className="mr-10 text-xl text-white ">
              <Link href="#">Séries</Link>
            </li>
            <li className="mr-10 text-xl text-white ">
              <Link href="#">Favoritos</Link>
            </li>
            <li className="mr-10 text-xl text-white ">
              <Link href="#">Sobre</Link>
            </li>
            <li className="mr-10 text-xl text-white border-2 pl-2 pr-2 rounded-lg bg-zinc-950 hover:bg-blue-800 transition-all duration-700 ">
              <Link href={`/login`}>Login</Link>
            </li>
            <li className="mr-10">
              <Perfil />
            </li>
          </ul>
        </nav>
      </header>
    )
};


export default NavBarHomePage;