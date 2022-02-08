import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-2 bg-gray-100">
      <Head>
        <title>The Open Learning Initiative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold pb-10">
          Welcome to The Open Learning Initiative!
        </h1>

        <Link href="/courses">
        <a>
          <motion.button whileHover={{ scale: 1.1}} class="bg-red-600 hover:font-extrabold text-white font-bold py-2 px-4 rounded">
            Start Learning Now!
          </motion.button>
        </a>
        </Link>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <ul>
          <li className="flex items-center justify-center">Rishi Edupalli {new Date().getFullYear().toString()}</li>
          <li className="flex items-center justify-center">We're&nbsp;<a className="font-bold" whileFocus={{scale: 1.1}} href="https://github.com/rishiedupalli/oli" target="_blank" rel="noopener noreferrer"><motion.p whileHover={{scale : 1.03}}>open source</motion.p></a>!</li>
        </ul>
      </footer>
    </div>
  )
}
