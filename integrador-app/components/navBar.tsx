import Link from 'next/link';
import { Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NavBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  let verify = false;

  const hendleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);

    if (!search) {
      alert('Enter the name of the movie');
      return;
    }
    router.push(`/Search?q=${search}`);
  };

  // const [createToBack, setCreateToBack] = useState('Create your movie');

  // function hendleSubmit () {
  //   if(verify === true) {
  //     verify = false
  //     setCreateToBack("Go back homePage")

  //     router.push(`/`)
  //   }
  //   else {
  //     verify = true
  //     setCreateToBack('Create your movie')
  //   }
  // }

  return (
    <header className="w-screen flex flex-col justify-between">
      <nav className="flex justify-between items-center">
        <h1 className="ml-10 text-2xl text-yellow-400 font-semibold items-center ">
          <Link href={`/`}>EstrelaFlicks</Link>
        </h1>
        
        <ul className="flex justify-around items-center flex-row mr-10">
          <li className="mr-10 text-xl text-yellow-400 ">
            <Link href={`/movie/create`}>Create movie</Link>
          </li>

          <li className="mr-10 text-xl text-yellow-400 ">
            <Link href="#">Log-out</Link>
          </li>
          <li className="mr-10 text-xl text-yellow-400 ">
            <form
              className="flex items-center mt-2"
              onSubmit={hendleFormSubmit}
            >
              <input
                type="text"
                placeholder="Procure seu filme ou série favorita"
                className="h-9 w-96 text-center rounded-2xl text-black"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button>
                <Search />
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
