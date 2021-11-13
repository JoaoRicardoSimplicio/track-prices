const { Sequelize } = require('sequelize')
const Model = Sequelize.Model;

const sequelize = require('../setup')


class Product extends Model {}
Product.init({
  title: { type: Sequelize.STRING, allowNull: false },
  url: { type: Sequelize.STRING, allowNull: false },
  crawler: { type: Sequelize.STRING, allowNull: false },
}, {
  sequelize,
  modelName: 'Products'
})

module.exports = Product
