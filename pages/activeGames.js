let data = require('../data/activeGames.json')
import Image from 'next/image'

const ActiveGames = () => {
  return (
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
  )
}

export default ActiveGames
