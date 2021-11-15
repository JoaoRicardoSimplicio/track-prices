const Product = require('../database/models/product')
const Price = require('../database/models/prices')

const getCrawlerStoreRespective = require('./toolbox')


async function updateCrawledProduct(crawler){
  await Product.sync()
  await Price.sync()
  const { crawledProduct } = crawler
  Product.findAll({
      where: {
        url: crawledProduct.url
      }
  })
  .then((ProductFromDatabase) => {
    Price.create({'product': ProductFromDatabase[0].dataValues.id, 'value': crawledProduct.price, 'crawledDate': crawledProduct.date})
    .then((priceCreated) => {
      console.log(`${ProductFromDatabase[0].dataValues.title} updated!`)
    })
    .catch((errorPrice) => {
      console.log(errorPrice)
    })
  })
  .catch((errorProduct) =>{
    console.log(errorProduct.errors[0].message)
  })
}


async function updateAllProductsPrice(){
  await Product.sync()
  await Price.sync()
  const productsRegistred = await Product.findAll({})
  for (var index=0 in productsRegistred){
    let CrawlerStore = getCrawlerStoreRespective(productsRegistred[index].dataValues.crawler)
    const crawlerStore = new CrawlerStore(productsRegistred[index].dataValues.url, productsRegistred[index].dataValues.crawler)
    crawlerStore.getPageInformation()
    setTimeout(() => {
      updateCrawledProduct({ crawledProduct: crawlerStore.info })
    }, 5000)
  }
}

module.exports = { updateCrawledProduct, updateAllProductsPrice }
