import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Lithium</title>
        <meta name="description" content="Manage your profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>This is dashboard page</div>
    </>
  )
}
