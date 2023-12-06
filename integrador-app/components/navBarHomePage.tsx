import Perfil from './perfil';

import Link from 'next/link';

import { Search } from 'lucide-react';

import React from 'react';

const NavBarHomePage = () => {
  return (
    <header className="h-12 w-full fixed top-0 left-0 ">
      <nav className="flex justify-between">
        <Link href={`/Home`}>
          <h1 className="ml-10 text-2xl  font-semibold items-center text-yellow-400 hover:text-yellow-500 transition-all duration-500">EstrelaFlicks</h1>
        </Link>
        <ul className="flex justify-around items-center flex-row mr-10">
          <li className="mr-10 text-xl text-yellow-400 hover:text-yellow-500 transition-all duration-500e ">
            <Link href="#">Filmes</Link>
          </li>
          <li className="mr-10 text-xl text-yellow-400 hover:text-yellow-500 transition-all duration-500 ">
            <Link href="#">Séries</Link>
          </li>
          <li className="mr-10 text-xl text-yellow-400 hover:text-yellow-500 transition-all duration-500 ">
            <Link href="#">Favoritos</Link>
          </li>
          
          <li className="mr-10 text-xl   text-yellow-400 hover:text-yellow-600 transition-all duration-700 ">
            <Link href={`/User/login`}>Login</Link>
          </li>
          <li className="mr-10">
            <Perfil />
          </li>
          <form className='flex items-center justify-between '>
            <input 
            type="text" 
            placeholder='Pesquisar'
            className='w-56 pl-10 pr-10 pt-1 pb-1 rounded-xl'
            />
            <div className='ml-2 '>
              <Search className='text-yellow-400 cursor-pointer'/>
            </div>
          </form>
        </ul>
      </nav>
    </header>
  );
};


export default NavBarHomePage;