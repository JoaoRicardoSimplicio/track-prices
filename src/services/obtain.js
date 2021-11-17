const Product = require('../database/models/product')
const Price = require('../database/models/prices')


async function obtainAllProductsData(){
  await Product.sync()
  await Price.sync()
  const products = await Product.findAll({})
  for (var i=0 in products){
    let product = products[i].dataValues
    product['prices'] = new Array()
    const prices = await Price.findAll({
      where: {
        product: product.id
      }
    })
    prices.map(function(price){
      product['prices'].push(price.value)
    })
    console.log(product)
  }
}

obtainAllProductsData()
