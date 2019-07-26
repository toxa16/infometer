import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { htmlFirst, htmlLast } from './html-parts';

import Homepage from '../components/Homepage';
import ResultPage from '../components/ResultPage';
import TermsOfService from '../components/TermsOfService';

const app = express();

app.get('/', (req, res, next) => {
  req.page = <Homepage />;
  next();
});

app.get('/result', (req, res, next) => {
  const q = req.query.q;
  if (!q) {
    res.redirect('/');
  } else {
    req.page = <ResultPage q={ q } />;
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
