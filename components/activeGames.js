import React from 'react'
let data = require('../data/activeGames.json')
import Search from './searchButton'

const ActiveGames = () => {
  const [value, setValue] = React.useState('')
  const [method, setMethod] = React.useState('type')

  const handleOnChange = (event, { newValue, method }) => {
    setValue(newValue)
    setMethod(method)
  }

  const handleSuggestionValue = (suggestion) => {
    setSuggestionValue(suggestion)
    return `${suggestion.name} | ${suggestion.platform}`
  }

  const GameItems = ({ game }) => {
    return (
      <div className="game" key={game.id}>
        <div className="img-container">
          <img src={game.thumbnail} className="img" />
        </div>

        <div className="game-activity">
          <h3>{game.name}</h3>
          <p>{game.platform}</p>
          <div className="progress-bar">
            <div
              className="percentage"
              style={{ width: `${game.percentage}%` }}></div>
          </div>
        </div>

        <p className="percentage">{game.percentage}%</p>
      </div>
    )
  }

  const renderActiveGames = () => {
    if (value && method !== 'type') {
      const splittedValue = value.split('|')

      const gameName = splittedValue[0]
      const platform = splittedValue[1]

      return data
        .filter(
          (game) =>
            gameName.trim().toLocaleLowerCase() ===
              game.name.trim().toLocaleLowerCase() &&
            platform.trim().toLocaleLowerCase() ===
              game.platform.trim().toLocaleLowerCase()
        )
        .map((w, index) => {
          return <GameItems key={index} game={w} />
        })
    } else {
      return data.map((game) => <GameItems game={game} />)
    }
  }

  return (
    <>
      <div className="circle"></div>
      <div className="content">
        <h2>Active Games</h2>

        <div className="search-box">
          <Search
            data={data}
            handleOnChange={handleOnChange}
            searchedValue={value}
          />
        </div>

        <div className="search-result">{renderActiveGames()}</div>
      </div>
    </>
  )
}

export default ActiveGames
