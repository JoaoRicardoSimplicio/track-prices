# Track prices

### Setup

```bash
    npm install
```

### Crawler product info

##### Bikeinn store

```bash
    node src/crawlers/bikeinn.js https://url_product 
```

##### Kabum store

```bash
    node src/crawlers/kabum.js https://url_product --save # To save product on database
```

##### Update prices of all your registred products

```bash
    npm run update-prices
```


### Migrations

```bash                                                                         
    npx sequelize-cli db:migrate --migrations-path src/database/migrations/ --config src/database/config/config.json
``` 
