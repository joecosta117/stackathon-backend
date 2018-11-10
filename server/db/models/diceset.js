const Sequelize = require('sequelize')
const db = require('../db')

const DiceSet = db.define('diceset', {
  set: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
