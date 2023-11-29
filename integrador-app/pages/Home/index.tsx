import React from "react";

import NavBarHomePage from "@/components/navBarHomePage";

import "@/styles/home.module.css";

import Link from "next/link";

const HomePage = () => {

  return (
    <div className="flex justify-between items-center flex-col mt-96">
      <NavBarHomePage />
      <main className="flex justify-evenly items-center  w-screen flex-col">
        <div className="flex justify-evenly items-center h-screen w-screen flex-col">
          <div className="">
            <h1 className=" bg-black/30 text-teal-500 2xl:text-4xl border-2 pl-10 pr-10 pt-2 pb-2 rounded-xl hover:bg-fuchsia-900 transition-all duration-1000 animate-bounce">
              Séries e Filmes em destaque
            </h1>
          </div>

          <div className="flex justify-around w-screen">
            <div className="mt-10">
              <Link href="/">
                <h1 className="text-3xl text-white text-center" >Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>
            <div className="mt-10">
              <Link href="/">
                <h1 className="text-3xl text-white text-center">Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>

            <div className="mt-10">
              <Link href="/">
                <h1 className="text-3xl text-white text-center">Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>

            <div className="mt-10">
              <Link href="/">
                <h1 className="text-3xl text-white text-center">Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-white hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>
          </div>
        </div>

        <div className="h-96 w-screen bg-zinc-50 " >
          <section className="">
            <form className="h-72 bg-black/90 flex items-center justify-center">
              <input
                type="text"
                placeholder="Buscar filmes e séries"
                className="pl-96 pr-96 pt-2 pb-2 rounded-lg placeholder:text-center text-xl"
              />
            </form>
          </section>
          
        </div>
      </main>
    </div>
  );
};

export default HomePage;
