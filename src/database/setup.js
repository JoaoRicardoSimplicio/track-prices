const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('track-prices', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = sequelize
