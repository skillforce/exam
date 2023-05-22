import './globals.css'
import {Inter, Roboto} from 'next/font/google'
import {Providers} from '@/store/provider';

const inter = Roboto({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'Армада Групп',
  description: 'Julia Tatarinova BRY',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
