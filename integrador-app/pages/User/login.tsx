import NavBar from '@/components/navBar';

import Link from 'next/link';

import React, { useState } from 'react';

import { checkToken } from '@/services/tokenConfig';

import { setCookie, getCookie } from 'cookies-next';

import { useRouter } from 'next/router';

export default function loginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  function hendleFormEdit(event: any, findName: string) {
    setFormData({
      ...formData,
      [findName]: event.target.value,
    });
  }
  async function formSubmit(event: any) {
    event.preventDefault();

    try {
        const response = await fetch('/api/action/user/login', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(formData)
      });

      console.log(response)

      const responseJson = await response.json();

      console.log(response)

      console.log(response.status);
      console.log(responseJson);
      
      if (response.status != 200) {
        throw new Error(responseJson.message);
      } else {
        setCookie('authorization', responseJson.token);

        router.push(`/`);
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-[url('../public/wp5108053.png')] h-screen w-screen justify-center items-center flex flex-col">
      <NavBar />
      <main>
        <div className="flex items-center justify-center flex-col w-auto h-auto border-2 pt-48 pb-48 pl-12 pr-12 rounded-xl bg-black/70 ">
          <h1 className="font-semibold mb-3 text-2xl text-white">
            Welcome Back
          </h1>
          <h1 className="font-semibold mb-3 text-2xl text-white">Sing-In</h1>
          <form className=" flex-col flex" onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="Digite o email ou nome de usuário"
              className="w-80 h-10 mb-2 rounded-lg bg-black/80  text-white text-center"
              onChange={(event) => {
                hendleFormEdit(event, 'email');
              }}
              value={formData.email}
              required
            />

            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-80 h-10 mb-2 mt-2 rounded-lg text-white bg-black/80 text-center "
              onChange={(event) => {
                hendleFormEdit(event, 'password');
              }}
              required
              value={formData.password}
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
            href={`/User/register`}
            className="w-80 broder-2 text-center bg-white/20 h-10 rounded-xl font-semibold text-lg mt-2 hover:bg-cyan-950 text-white transition-all duration-700 flex items-center justify-center"
          >
            Sing-in
          </Link>
        </div>
      </main>
    </div>
  );
}

export function getServerSideProps({ req, res }: any) {
  try {
      const token = getCookie('authorization', { req, res });

      if (!token) {
          throw new Error('Invalid token');
      }
      console.log(token)
      checkToken(token);
      return {
          redirect: {
              permanent: false,
              destination: `/`,
          },
          props: {}
      };
  }
  catch (err) {
      return {
          props: {}
      }
  }
}