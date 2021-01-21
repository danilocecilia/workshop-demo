import Head from 'next/head'
import '../styles/styles.scss'

import Sidebar from './sidebar'
import ActiveGames from './activeGames'

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          as="style"
        />

        <link
          rel="stylesheet"
          defer
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>

      <div className="main">
        <Sidebar />
        <div className="container">
          <ActiveGames />
        </div>
      </div>
    </>
  )
}

export default Home
