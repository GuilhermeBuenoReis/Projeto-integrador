import { Poppins } from 'next/font/google';
import NavBar from '@/components/navBar';
import { checkToken } from '@/services/tokenConfig';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  const router = useRouter();
  const [data, setData]: any = useState();

  async function fecthData() {
    const response = await fetch(`/api/action/movie/select`, {
      method: 'GET',
    });

    const responseJson = await response.json();

    setData(responseJson);

    console.log(responseJson);
  }

  useEffect(() => {
    fecthData();
  }, []);

  function movieClik(movieName: string) {
    router.push(`/movie/` + movieName);
  }
  return (
    <div className={`${poppins.className} bg-slate-900 text-black`}>
      <NavBar />
      <main>
        <div className=" h-full grid grid-cols-3 items-center">
          {data != undefined && data instanceof Array ? (
            data.map((movie) => (
              <div className="h-screen flex items-center justify-center">
                <div className="h-3/4 w-80 flex justify-center flex-col items-center">
                  <h1 className="text-white text-center text-3xl mb-6">{movie.name}</h1>
                  <img src={movie.imageURL} alt='' className="h-4/6 w-72 rounded-md bg-zinc-50"/>
                  <button
                    className="bg-yellow-400 w-72 mt-3 py-3 hover:bg-yellow-600 font-bold text-xl rounded-lg transition-all duration-700"
                    onClick={() => {
                      movieClik(movie.name);
                    }}
                  >
                    Ver detalhes do filme
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white">Filmes não encontrados</div>
          )}
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

    const verifiedToken = checkToken(token);

    return { props: { verifiedToken } };
  }
  catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: `/User/login`,
      },
      props: {}
    }
  }
}
