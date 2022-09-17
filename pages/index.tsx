import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Colin Blokkeel</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className='h-screen px-12 md:px-18 lg:px-24 mx-auto'>
        <Hero />
        <Hero />
      </div>
    </>
  )
}

export default Home
