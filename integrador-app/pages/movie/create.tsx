import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function createMovie() {
  const router = useRouter();
  const [formData, setFormData]: any = useState({
    name: '',
    releaseDate: '',
    sinopse: '',
    director: '',
  });

  const [imageUploaded, setImageUploaded] = useState(undefined);

  function hendleFormEdit(event: any, field: any) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  }

  function handleImageEdit(event: any) {
    setImageUploaded(event.target.files[0]);
  }

  async function formSubmit_image(event: any) {
    event.preventDefault();

    if (imageUploaded == undefined) {
      alert('Selecione uma imagem');
      return;
    }

    try {
      const img = new FormData();
      img.append('image', imageUploaded);

      const response = await fetch(`/api/action/movie/createImage`, {
        method: 'POST',
        body: img,
      });

      const responseJson = await response.json();

      if (response.status != 200) {
        throw new Error(responseJson.message);
      } else {
        createMovie(responseJson.secure_url);
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function createMovie(imgURL: string) {
    try {
      const response = await fetch(`/api/action/movie/create`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          releaseDate: formData.releaseDate,
          sinopse: formData.sinopse,
          director: formData.director,
          imageURL: imgURL,
        }),
      });

      const responseJson = await response.json();

      if (response.status != 201) {
        throw new Error(responseJson.message);
      } else {
        alert('Movie created');

        router.push(`/`);
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-slate-900 h-screen w-screen text-white">
      <main className=" h-full w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl m-9 text-yellow-400 font-semibold italic">
          Deseja criar um filme?
        </h1>
        <div className="border-2 h-auto py-24 w-96 rounded-lg flex items-center justify-center flex-col">
          <form
            onSubmit={formSubmit_image}
            className="flex items-center justify-center flex-col"
          >
            <input
              value={formData.name}
              onChange={(event) => {
                hendleFormEdit(event, 'name');
              }}
              type="text"
              placeholder="Nome"
              className="w-full h-9 rounded-xl text-center border-none text-black font-semibold"
            />
            <br />
            <input
              value={formData.releaseDate}
              onChange={(event) => {
                hendleFormEdit(event, 'releaseDate');
              }}
              type="date"
              className="w-full h-9 rounded-xl text-center border-none text-black font-semibold"
            />

            <br />

            <input
              value={formData.director}
              onChange={(event) => {
                hendleFormEdit(event, 'director');
              }}
              type="text"
              placeholder="Nome do Diretor"
              className="w-full h-9 rounded-xl text-center border-none text-black font-semibold"
            />
            <br />
            <br />
            <textarea
              cols={30}
              rows={5}
              placeholder="Sinopse do filme"
              className="w-full h-auto text-black font-mono font-medium text-center rounded-xl"
              value={formData.sinopse}
              onChange={(event) => {
                hendleFormEdit(event, 'sinopse');
              }}
            ></textarea>
            <br />

            <input
              onChange={handleImageEdit}
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              className="w-full h-9 text-center border-none  font-semibold"
            />
            <br />

            <button className="w-full h-10 rounded-xl text-center border-2 border-black bg-yellow-400 text-black font-semibold hover:bg-yellow-600 transition-all duration-700">
              Enviar
            </button>
          </form>
          <Link
            href={`/`}
            className=" flex items-center justify-center mt-4 w-3/4 h-10  rounded-xl text-center border-2 border-black bg-yellow-400 text-black font-bold hover:bg-yellow-600 transition-all duration-700"
          >
            <h1>Back to HomePage</h1>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default createMovie;
