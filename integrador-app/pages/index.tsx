import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <div>
        <h1>Olá seus Bundudos</h1>
      </div>
    </main>
  )
}