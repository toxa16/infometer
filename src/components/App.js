import React from 'react';
import { Router } from '@reach/router';

import Homepage from './Homepage';
import ResultPage from './ResultPage';

export default function App() {
  return <Router>
    <Homepage path="/" />
    <ResultPage path="/result" />
  </Router>;
}
