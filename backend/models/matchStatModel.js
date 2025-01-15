const mongoose = require('mongoose')

const Schema = mongoose.Schema

const matchSchema = new Schema({
  kills: {
    type: Number,
    required: true
  },
  time_survived: {
    type: Number,
    required: true
  },
  revives: {
    type: Number,
    required: true
  },
  knocks: {
    type: Number,
    required: true
  },
  ranking: {
    type: Number,
    required: true
  },
  damage_dealt: {
    type: Number,
    required: true
  },
  assists: {
    type: Number,
    required: true
  },
  healing_used: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Match', matchSchema)