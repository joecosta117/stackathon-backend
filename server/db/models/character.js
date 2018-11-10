const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  race: {
    type: Sequelize.STRING,
    allowNull: false
  },
  class: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Character
