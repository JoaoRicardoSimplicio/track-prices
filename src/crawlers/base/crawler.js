const cheerio = require('cheerio');
const fetch = require('cross-fetch');


class CrawlerBase {

  constructor(url, nameCrawler){
    this.url = url
    this.nameCrawler = nameCrawler
    this.headers = this.getHeaders()
    this.info = {}
  }

  getHeaders(){
    return {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
      },
    }
  }

  async getPageParser(){
    const pageHtml = await this.getPage()
    const pageParser = await cheerio.load(pageHtml)
    return pageParser
  }

  async getPage(){
    const resp = await fetch(this.url, this.headers) 
    const pageHtml = await resp.text()
    return pageHtml
  }
}


module.exports = CrawlerBase
