import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from "../components/sidebar"
import MainContent from "../components/mainContent"
import Navbar from "../components/navbar"

const Home: NextPage = () => {
  return (
    <div className="bg-rose-600	min-h-screen max-h-full text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 min-h-screen">
          <MainContent />

        </div>
      </div> 
    </div>
  )
}

export default Home
