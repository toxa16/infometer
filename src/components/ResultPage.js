import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import qs from 'query-string';

/**
 * Seeded random number from 0 to 100.
 * @param {string} seedStr 
 */
function randomWithSeed(seedStr) {
  const str = seedStr.toLowerCase();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z0-9]/.test(str[i])) {
      sum += str.charCodeAt(i);
    }
  }
  const pseudoRand = Math.abs(Math.sin(sum));
  return Math.round(pseudoRand * 100);
}

/**
 * Loop with delayed iterations.
 * @param {number} iterations 
 * @param {number} delay 
 * @param {Function} callback 
 * @param {number} i 
 */
function delayedLoop(iterations, delay, callback, i = 0) {
  if (iterations === 0) {
    return;
  } else {
    setTimeout(() => {
      callback(i);
      delayedLoop(iterations - 1, delay, callback, i + 1);
    }, delay);
  }
}

export default function ResultPage(props) {
  const search = props.location.search || props.location.pathname;
  const params = qs.parseUrl(search);
  const q = params.query.q;

  const maxPercentage = randomWithSeed(q);
  const [percentage, setPercentage] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      delayedLoop(maxPercentage, 50, i => setPercentage(i + 1));
    }, 800);
  }, []);

  return (
    <div>
      <p className="h3">Your info is</p>
      <p className="font-weight-bold display-1">
        <noscript>
          <span className={ "imc-" + maxPercentage }>{ maxPercentage }%</span>
        </noscript>
        { visible && <span className={ "imc-" + percentage }>{ percentage }%</span> }
      </p>
      <p className="text-muted pb-5">"{ q }"</p>
      <div>
        <Link className="text-info" to="/">Try another info</Link>
      </div>
    </div>
  );
}
