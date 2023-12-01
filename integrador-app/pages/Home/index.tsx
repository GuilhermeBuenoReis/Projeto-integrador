import React from "react";

import NavBarHomePage from "@/components/navBarHomePage";

import "@/styles/home.module.css";

import Link from "next/link";

import {Search} from 'lucide-react'

const HomePage = () => {

  return (
    <div className="flex justify-between items-center flex-col bg-slate-900 ">
      <NavBarHomePage />

      <main className="flex justify-evenly items-center  w-screen flex-col ">

        <div className="flex justify-evenly items-center h-screen w-screen flex-col">
          <div className=" flex items-center justify-center w-screen flex-col ">
            <div className="">
              <label className="text-white text-2xl mb-2">Digite o seu filme ou série prefirida</label>
              <Search className=""/>
            </div>
            <input 
              type="search" 
              placeholder="Digite seu filme ou série"
              className="w-1/2 pl-10 pr-10 pt-2 pb-2 rounded-xl text-center cursor-pointer bg-slate-800/80"
            />
          </div>
          <div className="">
            <h1 className=" bg-black/30 text-zinc-50 2xl:text-4xl border-2 pl-40 pr-40 pt-1 pb-1 rounded-xl hover:bg-fuchsia-900 transition-all duration-1000 animate-bounce cursor-pointer">
              Séries e Filmes em destaque
            </h1>
          </div>

          <div className="flex justify-around w-screen">
            <div className="">
              <Link href={`/Datails`}>
                <h1 className="text-3xl text-zinc-50 text-center" >Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>
            <div className="">
              <Link href={`/Datails`}>
                <h1 className="text-3xl text-zinc-50 text-center">Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>

            <div className="">
              <Link href={`/Datails`}>
                <h1 className="text-3xl text-zinc-50 text-center">Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>

            <div className="">
              <Link href={`/Datails`}>
                <h1 className="text-3xl text-zinc-50 text-center">Title</h1>
                <div className="h-80 w-56  bg-zinc-200 rounded-lg bg-[url('../public/velozes.jpg')]"></div>
              </Link>
              <span dado-de-avaliacao="1" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="2" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="3" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="4" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
              <span dado-de-avaliacao="5" className="text-4xl text-zinc-50 hover:text-yellow-400 transition-all duration-700 cursor-pointer">&#9733;</span>
            </div>
          </div>
        </div>

        {/* <div className="h-96 w-screen bg-zinc-50 " >
          <section className="bg-slate-900">
            <form className="h-72 bg-black/90 flex items-center justify-center">
              <input
                type="text"
                placeholder="Buscar filmes e séries"
                className="pl-96 pr-96 pt-2 pb-2 rounded-lg placeholder:text-center text-xl"
              />
            </form>
          </section>
          
        </div>  */}
      </main>
    </div>
  );
};

export default HomePage;
