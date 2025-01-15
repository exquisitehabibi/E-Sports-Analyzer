const Match = require('../models/matchStatModel')
const mongoose = require('mongoose')
// const analyzeGameStats = require('../analyse/analyse')

// get stats
const getMatches = async (req, res) => {
  const matches = await Match.find({}).sort({createdAt: -1})
    // const status = await analyzeGameStats(matches)
    res.status(200).json(matches)
}

// get a single match
const getMatch = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such match'})
  }

  const match = await Match.findById(id)

  if (!match) {
    return res.status(404).json({error: 'No such match'})
  }

  res.status(200).json(match)
}

// create a new match
const createMatch= async (req, res) => {
  const {kills, time_survived, revives, knocks, ranking, damage_dealt, assists, healing_used} = req.body

  // add to the database
  try {
    const match = await Match.create({ kills, time_survived, revives, knocks, ranking, damage_dealt, assists, healing_used })
    res.status(200).json(match)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a match
const deleteMatch = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such match'})
  }

  const match = await Match.findOneAndDelete({_id: id})

  if(!match) {
    return res.status(400).json({error: 'No such match'})
  }

  res.status(200).json(match)
}

// update a match
const updateMatch = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such match'})
  }

  const match = await Match.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!match) {
    return res.status(400).json({error: 'No such match'})
  }

  res.status(200).json(match)
}

module.exports = {
  getMatches,
  getMatch,
  createMatch,
  deleteMatch,
  updateMatch
}