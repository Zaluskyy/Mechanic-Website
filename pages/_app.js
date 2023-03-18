import '@/styles/globals.scss'
// import '@/styles/variables.module.scss'

import { Play } from '@next/font/google'

const plaoy = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={plaoy.className}>
      <Component {...pageProps} />
    </main>
  )
}
