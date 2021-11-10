const cheerio = require('cheerio');
const fetch = require('cross-fetch');


var REQUESTERCONFIG = {
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
  },
}


class CrawlerBase {

  constructor(url, nameCrawler){
    this.url = url
    this.nameCrawler = nameCrawler
    this.info = {}
  }

  async getPageParser(){
    const pageHtml = await this.getPage()
    const pageParser = await cheerio.load(pageHtml)
    return pageParser
  }

  async getPage(){
    const resp = await fetch(this.url, REQUESTERCONFIG) 
    const pageHtml = await resp.text()
    return pageHtml
  }
}


module.exports = CrawlerBase
