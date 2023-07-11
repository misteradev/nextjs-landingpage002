import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

// Font
import { Poppins } from 'next/font/google'

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
