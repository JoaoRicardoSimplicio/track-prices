const { Sequelize } = require('sequelize')
const Model = Sequelize.Model;

const sequelize = require('../setup')

const Product = require('./product')


class Price extends Model {}
Price.init({
  product : {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id',

    }
  },
  value: { type: Sequelize.STRING, allowNull: false },
  crawledDate: { type: Sequelize.DATE, allowNull: false },
}, {
  sequelize,
  modelName: 'Prices'
})

module.exports = Price
