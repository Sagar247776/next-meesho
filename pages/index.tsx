import type { NextPage } from 'next'
import Head from 'next/head'
import Fstore from '../components/Fstore'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Pro from '../components/Pro'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meesho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Fstore />
      <Pro />
    </div>
  )
}

export default Home
