const fs = require('fs')

const CrawlerBikeinn = require('../crawlers/bikeiin')
const CrawlerKabum = require('../crawlers/kabum')


async function openCrawlersInfoFile(){
  let rawData = fs.readFileSync('src/crawlers/crawlersinfo.json')
  let crawlersInfo = JSON.parse(rawData)
  return crawlersInfo
}


function getCrawlerStoreRespective(nameCrawler){
  let crawler = ''
  if (nameCrawler == 'Bikeinn'){
    crawler = CrawlerBikeinn
  }
  else if (nameCrawler == 'Kabum'){
    crawler = CrawlerKabum
  }
  return crawler
}

module.exports = getCrawlerStoreRespective
