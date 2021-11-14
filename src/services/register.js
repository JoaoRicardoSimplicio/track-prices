const Product = require('../database/models/product')
const Price = require('../database/models/prices')

async function registerCrawledProduct(crawler) {
  await Product.sync()
  await Price.sync()
  const { crawledProduct } = crawler
  Product.create({'title': crawledProduct.title, 'url': crawledProduct.url, 'crawler': crawledProduct.crawler})
  .then((ProductCreated) => {
    Price.create({'product': ProductCreated.id, 'value': crawledProduct.price, 'crawledDate': crawledProduct.date})
    .then((priceCreated) => {
      console.log(`${ProductCreated.title} registered!`)
    })
    .catch((errorPrice) => {
      console.log(errorPrice)
    })
  })
  .catch((errorCrawledProduct) => {
    console.log(errorCrawledProduct)
  })
}

module.exports = registerCrawledProduct
