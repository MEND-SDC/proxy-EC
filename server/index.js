require('newrelic');

const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(cors());
// serve up static file
app.use('/*', express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

app.use('/loaderio-8cbfd155759247c75ceb1cee030d0375.txt', express.static(path.join(__dirname, '../public/loaderio-8cbfd155759247c75ceb1cee030d0375.txt')));



const photogalleries = {
  // target: 'http://localhost:3004',
  target: 'http://35.162.183.181',
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
};
const photogallery = proxy(photogalleries);
app.use('/', photogallery);



const reservations = {
  // target: 'http://3.135.103.1',
  // target: 'http://localhost:3002',
  target: 'http://13.52.45.163',
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
};

const reservation = proxy(reservations);
app.use('/', reservation);



const suggestions = {
  // target: 'http://localhost:3001',
  target: '52.53.156.46',
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
};
const suggestion = proxy(suggestions);
app.use('/', suggestion);



const reviews = {
  target: 'http://localhost:3003',
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
};

const review = proxy(reviews);
app.use('/', review);