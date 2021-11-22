const registerCrawledProduct = require('../services/register')
const getCrawlerStoreRespective = require('../services/toolbox')


function parserArguments(args){
  let arguments = {}
  args.forEach(arg => {
    let [option, value] = arg.split('=')
    if (option == 'crawler' || option == 'action'){
      arguments[`${option}`] = value
    }
  })
  return arguments
}

if (process.argv[3]){
  const url = process.argv[2]
  const arguments = parserArguments(process.argv)
  if (arguments['crawler'] != undefined){
    const CrawlerStore = getCrawlerStoreRespective(arguments['crawler'])
    if (CrawlerStore != '' && url.startsWith('http')){
      const crawlerStore = new CrawlerStore(url, arguments['crawler'])
      crawlerStore.getPageInformation()
      setTimeout(() => {
        if (arguments['action'] == 'save'){
          registerCrawledProduct({ crawledProduct: crawlerStore.info })
        }
        else {
          console.clear()
          console.log(crawlerStore.info)
        }
      }, 5000)
    }
  }
}
