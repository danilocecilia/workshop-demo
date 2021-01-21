import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import '../styles/styles.scss'

let data = require('../data/activeGames.json')

import Image from 'next/image'

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
        <div className="sidebar">
          <div className="content">
            <div className="profile">
              <Image src="/avatar.png" alt="me" width="70" height="70" />
              <p>Danilo Cecilia</p>
              <p>Pro Member</p>
            </div>
            <ul className="nav">
              <li>
                <i className="fab fa-twitch big-icon"></i>
                <a>Streams</a>
              </li>
              <li>
                <i className="fab fa-steam big-icon"></i>
                <a>Games</a>
              </li>
              <li>
                <i className="fas fa-gamepad big-icon"></i>
                <a>Upcoming</a>
              </li>
              <li>
                <i className="fas fa-book big-icon"></i>
                <a>Library</a>
              </li>
            </ul>

            <div className="join-now">
              <p>Join pro for free games.</p>
              <Image
                className="gamepad"
                src="/gamepad.png"
                alt="gamepad"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h2>Active Games</h2>

            <div className="search-box">
              <div className="wrapper">
                <input className="input-search" placeholder="Search"></input>
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            <div className="search-result">
              {data.map((w) => {
                return (
                  <div className="game" key={w.id}>
                    <div className="img-container">
                      <Image
                        layout="fill"
                        loader={() => w.thumbnail}
                        src="me.png"
                        className="img"
                      />
                    </div>

                    <div className="game-activity">
                      <h3>{w.name}</h3>
                      <p>{w.platform}</p>
                      <div className="progress-bar">
                        <div
                          className="percentage"
                          style={{ width: w.percentage + '%' }}></div>
                      </div>
                    </div>

                    <p className="percentage">{w.percentage}%</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
