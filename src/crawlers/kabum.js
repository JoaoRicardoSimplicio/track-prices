const CrawlerBase = require('./base/crawler');


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

module.exports = CrawlerKabum
