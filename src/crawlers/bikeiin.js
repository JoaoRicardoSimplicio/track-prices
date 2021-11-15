const CrawlerBase = require('./base/crawler');


class CrawlerBikeinn extends CrawlerBase {
  
  constructor(url, nameCrawler){
    super(url, nameCrawler)
  }
  
  getPageInformation(){
    this.getPageParser()
    .then((pageParser) => {
      this.info = {
        'title': this.extractProductTitle(pageParser),
        'price': this.extractProductPrice(pageParser),
        'sizes': this.extractProductSizes(pageParser),
        'url': this.url,
        'crawler': this.nameCrawler,
        'date': new Date(),
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  extractProductTitle(pageParser){
    return pageParser('.productName')[0].children[0].data
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

module.exports = CrawlerBikeinn
