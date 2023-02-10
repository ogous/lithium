import clsx from 'clsx'
import { Lexend } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const lexend = Lexend({
  variable: '--font-lexend',
  weight: ['200', '300', '400', '700', '800', '900'],
  subsets: ['latin']
})

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div
      className={clsx(
        lexend.variable,
        'flex min-h-screen flex-col overflow-y-hidden bg-layer text-white'
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col items-center">{children}</main>
      <Footer />
    </div>
  )
}
