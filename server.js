const express = require('express');
const fetch = require('isomorphic-fetch');

const { callback } = require('./api/config');
const search = require('./routes/search/search');
const parse = require('./api/parse');
const url = require('./api/url');

const app = express();
const router = express.Router();

router.get('/search/:query', (req, res, next) => {
  const { query } = req.params;
  const endpoint = url('search', query);

  fetch(endpoint)
    .then(response => response.text())
    .then(text => parse.jsonp(text))
    .then(json => search.transform(json))
    .then(output => res.send(output))
    .catch((err) =>{
      console.log('err', err);
      res.send(err);
    });
});

router.get('/diagnostic/heartbeat', (req, res) => {
  res.send('OK');
});

router.get('/diagnostic/callback', (req, res) => {
  res.send(callback);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('\uD83D\uDE80', ' Server running on port 3000');
});

app.use('/', router);
