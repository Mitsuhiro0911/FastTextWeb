## 起動コマンドのサンプル
docker-compose run --rm --service-ports app node ./bin/www

## 環境構築手順
npm init
npm install express
npm install ejs
(npm install express-generator -g)
express --view=ejs
npm install