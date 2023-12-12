import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

import { checkToken } from '@/services/tokenConfig';

import NavBar from '@/components/navBar';

import img from '@/public/vingadores.jpg';

import Image from 'next/image';

export default function Datails({ movieName }: any) {
  const [movie, setMovie]: any = useState();
  const [formData, setFormData] = useState({
    value: 5,
    comment: "",
    email: "",
    movieName: movieName,
  });
  const router = useRouter();

  function handleFormEdit(event: any, field: string) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  }

  async function formSubmit() {
    try {
      const cookie = getCookie("authorization");

      const tokenInfos = checkToken(cookie);

      const response = await fetch(`/api/action/rating/create`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          value: Number(formData.value),
          comment: formData.comment,
          email: tokenInfos.login,
          movieName: formData.movieName,
        }),
      });

      const responseJson = await response.json();

      if (response.status != 201) {
        throw new Error(responseJson.message);
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function fetchData() {
    const res = await fetch(`/api/action/movie/find?name=${movieName}`, {
      method: 'GET',
    });

    const resJson = await res.json();

    console.log(resJson);

    setMovie(resJson);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-900 text-white overflow-x-hidden">
      <NavBar />
      {movie != undefined ? (
        <main className=" h-full flex items-center flex-col mb-10 w-screen">
          <div className=" w-screen h-screen flex items-center justify-evenly mt-20">
            <div className="flex flex-col">
              <Image src={img} alt="image" width={925} className="rounded-lg" />

              <div className=" flex items-start justify-start flex-col mt-3">
                <div className="w-925 h-auto">
                  <h1 className="text-center text-3xl font-semibold italic">
                    Sinopse do filme
                  </h1>
                  <p className="max-w-4xl break-words text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae aut error eligendi molestias, voluptates illo,
                    explicabo labore at earum ipsa dolores incidunt qui quo
                    reprehenderit cupiditate. Esse, atque sed! Reiciendis!
                    Maxime architecto, repudiandae mollitia dignissimos
                    reiciendis non voluptates ducimus dicta totam enim minus
                    necessitatibus ullam voluptatem perferendis amet. Nostrum
                    assumenda non quaerat cupiditate. Officiis magni, amet
                    sapiente explicabo blanditiis culpa. Quod amet iure
                    quibusdam tenetur sapiente iste qui nostrum, eveniet
                    corrupti enim. Id accusantium dolor sapiente minus neque vel
                    fugit autem officia? Asperiores eum neque, maxime quas fugit
                    explicabo a. Et eos accusamus dicta voluptatem error
                    placeat. Impedit dolores aut voluptatibus exercitationem
                    possimus eveniet ut accusantium reprehenderit autem itaque
                    velit praesentium modi, fuga ipsum quod quidem corporis,
                    dolor est eius.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-100 border-2 flex-col flex items-center justify-evenly h-104 rounded-md xl:w-94 bg-black/40 mb-56">
              <div className=" w-11/12 text-center text-xl h-22 flex justify-center items-center rounded-lg flex-col">
                <h1 className="font-semibold italic">Nome do filme:</h1>
                <h1 className="text-yellow-400">{movie.name}</h1>
              </div>

              <div className=" w-11/12 text-center text-xl h-22 flex justify-center items-center rounded-lg flex-col">
                <h1 className="font-semibold italic">Nome do filme:</h1>
                <h1 className="text-yellow-400">Ação e comédia</h1>
              </div>

              <div className=" w-11/12 text-center text-xl h-20 flex justify-center items-center rounded-lg flex-col">
                <h1 className="font-semibold italic">Data de lançamento:</h1>
                <h1 className="text-yellow-400">{movie.releaseDate}</h1>
              </div>

              <div className=" w-11/12 text-center text-xl h-20 flex justify-center items-center rounded-lg flex-col">
                <h1 className="font-semibold italic text-2xl">
                  Diretor do filme:
                </h1>
                <h1 className="text-yellow-400 text-2xl">
                  adasdsadsdasdasdsadsa
                </h1>
              </div>
            </div>
          </div>
          <section className="w-screen flex items-center justify-center flex-col mb-32 mt-8">
            <h1 className="text-yellow-400 text-3xl mb-4">Avaliar filme</h1>

            <form
              className="w-screen flex items-center  flex-col"
              onSubmit={formSubmit}
            >
              <div className="flex items-center justify-center w-screen">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Digite seu Comentário aqui"
                  className="text-black text-center w-2/5 h-24 rounded-lg"
                  onChange={(event) => {
                    handleFormEdit(event, 'comment');
                  }}
                  value={formData.comment}
                ></textarea>

                <select
                  className="text-black ml-3 border-2 w-14 h-14 rounded-full"
                  onChange={(event) => {
                    handleFormEdit(event, 'value');
                  }}
                  value={formData.value}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className="bg-yellow-500 w-80 mt-3 py-2 hover:bg-yellow-600 font-bold text-xl rounded-lg transition-all duration-700 text-black">
                Enviar
              </button>
            </form>
          </section>
          {movie.ratings.map(rating => (
            <>
              <div className=" w-3/5 rounded-lg flex justify-center flex-col border-2">
                <div className=" w-96 text-center p-3 rounded-lg flex ">
                  <h1 className="text-xl mr-2">Usuário: </h1>
                  <h1 className="text-xl"> {rating.user.email}</h1>
                </div>
                <div className=" w-96 text-center p-3 rounded-lg flex ">
                  <h1 className="text-xl mr-2">Nota: </h1>
                  <h1 className="text-xl">{rating.value}</h1>
                </div>

                <div className=" w-auto p-3 rounded-md">
                  <h1 className="text-xl mr-2">Comentário: </h1>
                  <p className="break-words text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum vitae sem nec quam fringilla malesuada.
                    Suspendisse potenti. Sed id justo vel urna consequat aliquet
                    ac id nulla. Fusce auctor, velit sit amet dictum bibendum,
                    odio lacus dapibus metus, nec ullamcorper lacus lectus nec
                    ligula. Aenean ullamcorper, eros ut vulputate sollicitudin,
                    ligula odio euismod libero, vitae interdum ipsum lacus ut
                    lectus. In hac habitasse platea dictumst. Ut non dapibus
                    elit. Sed vel neque non erat varius aliquam. Duis varius,
                    quam in aliquet venenatis, nisl turpis dictum purus, vel
                    ullamcorper justo erat sit amet tortor. Integer eu nisl in
                    lectus ultrices varius a eget elit. Curabitur non risus a
                    augue auctor tincidunt. Sed eleifend cursus luctus. Nunc
                    lacinia bibendum elit, vitae tristique libero sollicitudin
                    at. Nullam non libero sit amet nulla sagittis laoreet.
                    Suspendisse potenti. lorem*3
                  </p>
                </div>
              </div>
            </>
          ))}
        </main>
      ) : (
        <div className="h-screen w-screen bg-slate-900">
          Filme não encontrado
        </div>
      )}
    </div>
  );
}

export function getServerSideProps(context: any) {
  const { movieName } = context.query;

  return {
    props: { 
        movieName 
    }
  };
}
