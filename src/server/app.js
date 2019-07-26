import path from 'path';
import { Url } from 'url';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerLocation } from '@reach/router';

import { htmlFirst, htmlLast } from './html-parts';

import TermsOfService from '../components/TermsOfService';
import App from '../components/App';

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res, next) => {
  req.page = <ServerLocation url={ req.url }>
    <App />
  </ServerLocation>;
  next();
});

app.get('/result', (req, res, next) => {
  const q = req.query.q;
  if (!q) {
    res.redirect('/');
  } else {
    //req.page = <ResultPage q={ q } />;
    req.page = <ServerLocation url={ req.url }>
      <App />
    </ServerLocation>;
    next();
  }
});

app.get('/terms-of-service', (req, res, next) => {
  req.page = <TermsOfService />;
  next();
});

app.use((req, res) => {
  res.write(htmlFirst);
  const stream = ReactDOMServer.renderToNodeStream(req.page);
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.end(htmlLast);
  });
});

export default app;
