import Head from 'next/head'
import Image from 'next/image'
import Hero from 'public/hero.png'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useConnectModal } from '@rainbow-me/rainbowkit'

export default function Home() {
  const { status, data } = useSession()
  const { openConnectModal } = useConnectModal()
  const btnClasses =
    'rounded-[4px] bg-primary px-4 font-bold hover:scale-[1.03] min-w-[50px] py-3'

  return (
    <>
      <Head>
        <title>Lithium</title>
        <meta name="description" content="CONTRIBUTE. ENGAGE. EARN." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="relative w-full p-12">
        <div className="relative z-[1]">
          <h1 className="font-lexend text-[72px] font-black leading-[86px]">
            CONTRIBUTE. <br /> ENGAGE. EARN.
          </h1>
          <h2 className="mb-10 mt-8 font-lexend text-[22px] font-extralight">
            Lithium lets you discover the most exciting{' '}
            <strong>projects</strong> and
            <br /> <strong>communities</strong>, help them succeed, and earn{' '}
            <strong>rewards</strong>.
          </h2>
          {status === 'authenticated' ? (
            <p className="mb-10">
              Hey, Welcome{' '}
              {data?.user?.name?.slice(0, 4) +
                '...' +
                data?.user?.name?.slice(-4)}
            </p>
          ) : null}
          {status === 'authenticated' ? (
            <Link href="/dashboard" className={btnClasses}>
              Dashboard
            </Link>
          ) : (
            <button className={btnClasses} onClick={openConnectModal}>
              Connect
            </button>
          )}
        </div>
        <Image src={Hero} alt="Hero cover" className="absolute inset-0 z-[0]" />
      </div>
    </>
  )
}
