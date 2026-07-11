import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Caveat, Nunito, Space_Mono } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Untuk Marulin Andriani',
  description:
    'Sebuah kartu pos digital — cerita perjalanan kita, dari pertemuan tak sengaja sampai hari ini. Selamat ulang tahun.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#FFF6E9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`bg-background ${fredoka.variable} ${caveat.variable} ${nunito.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
