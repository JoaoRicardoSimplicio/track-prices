# Track prices

### Setup

```bash
    npm install
```


### Crawler product

```bash
    npm run crawler https://url_product nameCrawler action
```

##### Update prices of all your registred products

```bash
    npm run update-prices
```


### Migrations

```bash                                                                         
    npx sequelize-cli db:migrate --migrations-path src/database/migrations/ --config src/database/config/config.json
``` 
