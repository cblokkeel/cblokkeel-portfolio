import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-5/6 mx-auto'>
      <Head>
        <title>Colin Blokkeel</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
