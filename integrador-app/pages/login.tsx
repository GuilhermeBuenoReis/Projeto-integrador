import NavBar from "@/components/navBar";

import Link from "next/link";

import React from "react";

const Login = () => {
  return (
    <div className="bg-[url('../public/wp5108053.png')] h-screen w-screen justify-center items-center flex">
      <NavBar />
      <main>
        <div className="flex items-center justify-center flex-col w-auto h-auto border-2 pt-48 pb-48 pl-12 pr-12 rounded-xl bg-black/70 ">
          <h1 className="font-semibold mb-3 text-2xl text-white">
            Welcome Back
          </h1>
          <h1 className="font-semibold mb-3 text-2xl text-white">Sing-In</h1>
          <form className=" flex-col flex">
            <input
              type="email"
              placeholder="Digite o email"
              className="w-80 h-10 mb-2 rounded-lg bg-black/80  text-white placeholder:text-center"
            />

            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              className="w-80 h-10 mb-2 mt-2 rounded-lg text-white bg-black/80 placeholder:text-center "
            />

            <button className="w-80 broder-2 text-center bg-red-600 h-10 rounded-xl font-semibold text-lg mt-2 hover:bg-red-800 text-white transition-all duration-700">
              Login
            </button>
          </form>
          <h1 className="text-center font-semibold text-lg text-white mt-2">
            ------------------------------------------------
          </h1>
          <h1 className="text-center font-semibold text-lg text-white mt-3 mb-3">
            Create Account
          </h1>

          <Link
            href={`/register`}
            className="w-80 broder-2 text-center bg-white/20 h-10 rounded-xl font-semibold text-lg mt-2 hover:bg-cyan-950 text-white transition-all duration-700 flex items-center justify-center"
          >
            Sing-in
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
