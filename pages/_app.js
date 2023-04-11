import '@/styles/globals.scss'
// import '@/styles/variables.module.scss'

import { Play } from '@next/font/google'

const play = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={play.className}>
      <Component {...pageProps} />
    </main>
  )
}
