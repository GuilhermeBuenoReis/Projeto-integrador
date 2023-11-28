import { Roboto } from 'next/font/google';

import HomePage from './Home';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
      <div className={`${roboto.className} h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800`}>
        <main className=" flex items-center justify-center w-screen h-screen">
          <HomePage />
        </main>
      </div>
  )
}
