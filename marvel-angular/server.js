const express = require('express')
, bodyParser = require('body-parser')
, app = module.exports = express()
, md5 = require('md5')
, request = require('request')
, config = require('./config.js')
, _publicKey = config._publicKey
, _privateKey = config._privateKey
, timeStamp = new Date().valueOf().toString()
, hash = md5(timeStamp + _privateKey + _publicKey)
, _marvelCharacerUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${_publicKey}&hash=${hash}`;

app.use(bodyParser.json());
console.log(config._privateKey)
app.get('/api/getUser', (req,res) => {
    console.log('wer here')
    request.get(_marvelCharacerUrl, {json: true}, (err, resp, body) => {
      if(!err){
        console.log('stuff', body.data)
        res.status(200).send(body.data)
      }
    } )
})

app.listen(3000, console.log(3000));