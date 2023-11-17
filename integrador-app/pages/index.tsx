import { Roboto } from 'next/font/google'

import NavBarHomePage from '@/components/navBarHomePage'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${roboto.className} h-screen w-screen bg-blue-950 `}>
      <div>
        <NavBarHomePage />
      </div>
    </main>
  )
}
