import { Roboto } from 'next/font/google';

import HomePage from './Home';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`${roboto.className} h-screen w-screen bg-slate-900 text-black`}>
      <main>
        <HomePage />
      </main>
    </div>
  )
}

