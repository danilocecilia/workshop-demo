let data = require('../../../data/activeGames.json')

export default function handler(req, res) {
  res.status(200).json(data)
}
