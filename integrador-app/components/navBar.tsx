import Link from 'next/link'

import Perfil from './perfil'

function NavBar() {
  return (
    <header className="h-12 w-full fixed top-0 left-0 ">
      <nav className="flex justify-between">
        <h1 className="ml-10 text-2xl text-white font-semibold items-center">
          EstrelaFlicks
        </h1>
        <ul className="flex justify-around items-center flex-row mr-10">
          <li className="mr-10 text-xl text-white ">
            <Link href="#">Filmes</Link>
          </li>
          <li className="mr-10 text-xl text-white ">
            <Link href="#">Séries</Link>
          </li>
          <li className="mr-10 text-xl text-white ">
            <Link href="#">Favoritos</Link>
          </li>
          <li className="mr-10 text-xl text-white ">
            <Link href="#">Sobre</Link>
          </li>
          <li className="mr-10">
            <Perfil />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
