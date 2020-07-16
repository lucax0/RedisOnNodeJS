const express = require('express');
const responseTime = require('response-time')
const axios = require('axios');
const redis = require('redis');

const app = express();
//Instalar redis CLI!
const client = redis.createClient();

client.on('error', (err) => {
  console.log("Error " + err);
});

//middleware é um software que se encontra entre sistemas operacionais
app.use(responseTime());
