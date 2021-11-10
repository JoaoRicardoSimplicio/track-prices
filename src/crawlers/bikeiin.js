const fs = require('fs');
const CrawlerBase = require('./base/crawler');


class CrawlerBikeiin extends CrawlerBase {
  
  constructor(url, nameCrawler){
    super(url, nameCrawler)
  }
  
  getPageInformation(){
    this.getPageParser()
    .then((pageParser) => {
      this.info = {
        'title': pageParser('title')[0].children[0].data,
        'price': this.extractProductPrice(pageParser),
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  extractProductPrice(pageParser){
    return pageParser('#datos_producto_precio')[0].children[1].children[0].data
  }
}


if (process.argv[2]){
  const url = process.argv[2]
  const crawlerBikeiin = new CrawlerBikeiin(url, 'Bikeiin');
  crawlerBikeiin.getPageInformation()
  setTimeout(() => {
    console.log(crawlerBikeiin.info)
  }, 5000)
}

module.exports = CrawlerBikeiin
