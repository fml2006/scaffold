import './globals.css'
import { Inter } from 'next/font/google'
import { ReactQueryProvider } from '../providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next Apps',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav>NAVBAR</nav>
          {children}
          <footer>FOOTER</footer>
        </body>
      </html>
    </ReactQueryProvider>
  )
}
