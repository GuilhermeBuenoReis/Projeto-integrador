import Perfil from './perfil';
import Link from 'next/link';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { checkToken } from "@/services/tokenConfig";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from 'next/router';


const NavBarHomePage = () => {
  const router = useRouter();

  function logOut () {
    deleteCookie('authorization');

    router.push(`/User/login`)
  }

  return (
    <header className="h-12 w-full fixed top-0 left-0 ">
      <nav className="flex justify-between">
        <Link href={`/`}>
          <h1 className="ml-10 text-2xl  font-semibold items-center text-yellow-400 hover:text-yellow-500 transition-all duration-500">
            EstrelaFlicks
          </h1>
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
            <button onClick={logOut}>
              Log-in
            </button>
          </li>
          <li className="mr-10">
            <Perfil />
          </li>
          <form className="flex items-center justify-between ">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-56 pl-10 pr-10 pt-1 pb-1 rounded-xl"
            />
            <div className="ml-2 ">
              <Search className="text-yellow-400 cursor-pointer" />
            </div>
          </form>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarHomePage;

export function getServerSideProps({ req, res }: any) {
  try {
    const token = getCookie('authorization', { req, res });

    if (!token) {
      throw new Error('Invalid Token');
    }

    checkToken(token);

    return {
      props: {}
    }

  }
  catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/user/login'
      },
      props: {}
    }
  }
}