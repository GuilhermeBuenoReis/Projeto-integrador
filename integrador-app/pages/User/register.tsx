import { useState } from 'react';
import NavBar from '@/components/navBar';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function registerPage() {
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();

  function handleFormEdit(event: any, fieldName: string) {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  }

  async function formSubmit(event: any) {
    event.preventDefault();

    try {
      const response:any = await fetch(`/api/actions/user/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const responseJson = await response.json();

      console.log(response.status);
      console.log(responseJson);

      if (response.status != 201) {
        throw new Error(responseJson.message);
      } else {
        alert('Account Created');
        router.push(`/User/login`);
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-[url('../public/background-register.jpg')] h-screen w-screen justify-center items-center flex">
      <NavBar />
      <main>
        <div className="flex items-center justify-center flex-col w-auto h-auto border-2 pt-40 pb-40 pl-16 pr-16 rounded-xl bg-black/30">
          <h1 className="font-semibold mb-3 text-2xl text-white">
            Create Account
          </h1>
          <form className=" flex-col flex" onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-80 h-10 mb-3 mt-2 rounded-lg text-white bg-black/80  text-center "
              onChange={(event) => {
                handleFormEdit(event, 'name');
              }}
              value={formData.name}
            />

            <input
              type="email"
              placeholder="Digite o email"
              className="w-80 h-10 mb-1 rounded-lg bg-black/80  text-white text-center"
              onChange={(event) => {
                handleFormEdit(event, 'email');
              }}
              value={formData.email}
              required
            />

            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              className="w-80 h-10 mb-1 mt-2 rounded-lg text-white bg-black/80 text-center "
              onChange={(event) => {
                handleFormEdit(event, 'username');
              }}
              value={formData.username}
              required
            />

            <input
              type="password"
              placeholder="Digite a sua senha"
              className="w-80 h-10 mb-1 mt-2 rounded-lg text-white bg-black/80 text-center"
              onChange={(event) => {
                handleFormEdit(event, 'password');
              }}
              value={formData.password}
              required
            />

            <input
              type="password"
              placeholder="Confirme a sua senha"
              className="w-80 h-10 mb-2 mt-2 rounded-lg text-white bg-black/80 text-center"
              onChange={(event) => {
                handleFormEdit(event, 'confirmPassword');
              }}
              value={formData.confirmPassword}
              required
            />

            <button className="w-80 border-2 text-center bg-red-600 h-10 rounded-xl font-semibold text-lg mt-2 hover:bg-red-800 text-white transition-all duration-700">
              Create Accont
            </button>
          </form>
          <h1 className="text-center font-semibold text-lg text-white mt-2">
            ------------------------------------------------
          </h1>
          <h1 className="text-center font-semibold text-lg text-white mt-3 mb-3">
            Ja tem uma conta?
          </h1>

          <Link
            href={`/User/login`}
            className="w-80 broder-2 text-center bg-black/95 h-10 rounded-xl font-semibold text-lg mt-2 hover:bg-cyan-950 text-white transition-all duration-700 flex items-center justify-center"
          >
            Sing-in
          </Link>
        </div>
      </main>
    </div>
  );
}
