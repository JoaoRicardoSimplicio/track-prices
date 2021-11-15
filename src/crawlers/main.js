const registerCrawledProduct = require('../services/register')
const getCrawlerStoreRespective = require('../services/toolbox')


if (process.argv[3]){
  const url = process.argv[2]
  const nameCrawler = process.argv[3]
  const action = process.argv[4]
  const CrawlerStore = getCrawlerStoreRespective(nameCrawler)
  if (CrawlerStore != '' && url.startsWith('http')){
    const crawlerStore = new CrawlerStore(url, nameCrawler)
    crawlerStore.getPageInformation()
    setTimeout(() => {
      if (action == 'save'){
        registerCrawledProduct({ crawledProduct: crawlerStore.info })
      }
      else {
        console.log(storeCrawler.info)
      }
    }, 5000)
  }
}
