const CrawlerBase = require('./base/crawler');


class CrawlerBikeinn extends CrawlerBase {
  
  constructor(url, nameCrawler){
    super(url, nameCrawler)
  }
  
  getPageInformation(){
    this.getPageParser()
    .then((pageParser) => {
      this.info = {
        'title': pageParser('title').text(),
        'price': this.extractProductPrice(pageParser),
        'sizes': this.extractProductSizes(pageParser),
        'url': this.url,
        'date': new Date(),
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  extractProductPrice(pageParser){
    return pageParser('#datos_producto_precio')[0].children[1].children[0].data
  }

  extractProductSizes(pageParser){
    let sizes = []
    let itens = pageParser('#tallas_detalle')[0].children
    for (let i in itens){
      if (itens[i].name == 'option'){
        sizes.push(itens[i].children[0].data)
      }
    }
    return sizes
  }
}


if (process.argv[2]){
  const url = process.argv[2]
  const crawlerBikeinn = new CrawlerBikeinn(url, 'Bikeinn');
  crawlerBikeinn.getPageInformation()
  setTimeout(() => {
    console.log(crawlerBikeinn.info)
  }, 5000)
}

module.exports = CrawlerBikeinn
