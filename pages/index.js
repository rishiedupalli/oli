import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen py-2 bg-gray-100">
      <Head>
        <title>The Open Learning Initiative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-red-600" href="/courses">
            The Open Learning Initiative
          </a>
        </h1>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <ul>
          <li className="flex items-center justify-center">Rishi Edupalli {new Date().getFullYear().toString()}</li>
          <li className="flex items-center justify-center">We're&nbsp;<a className="font-bold" href="https://github.com/rishiedupalli/oli" target="_blank" rel="noopener noreferrer">open source</a>!</li>
        </ul>
      </footer>
    </div>
  )
}
