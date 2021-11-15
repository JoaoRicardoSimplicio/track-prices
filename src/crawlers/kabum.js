const CrawlerBase = require('./base/crawler');

const registerProduct = require('../services/register')
const updateCrawledProduct = require('../services/update')


class CrawlerKabum extends CrawlerBase {

  constructor(url, nameCrawler){
    super(url, nameCrawler)
  }

  getPageInformation(){
    this.getPageParser()
    .then((pageParser) => {
      this.info = {
        'title': pageParser('title').text(),
        'price': this.extractProductPrice(pageParser),
        'url': this.url,
        'crawler': this.nameCrawler,
        'date': new Date(),
      }
    })
    .catch((error) => {
    })
  }

  extractProductPrice(pageParser){
    return pageParser('h4')[0].children[0].data
  }
}


if (process.argv[2]){
  const url = process.argv[2]
  const action = process.argv[3]
  const crawlerKabum = new CrawlerKabum(url, 'Kabum');
  crawlerKabum.getPageInformation()
  setTimeout(() => {
    if (action == '--save'){
      registerProduct({ crawledProduct: crawlerKabum.info })
    }
    else if (action == '--update'){
      updateCrawledProduct({ crawledProduct: crawlerKabum.info })
    }
    else {
      console.log(crawlerKabum.info)
    }
  }, 5000)
}

module.exports = CrawlerKabum
