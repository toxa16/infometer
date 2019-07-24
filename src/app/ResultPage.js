import React from 'react';

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

export default class ResultPage extends React.Component {
  render() {
    const q = this.props.q;

    return (
      <div>
        <p className="h3">Your info is</p>
        <p className="font-weight-bold text-info display-1">
          { randomWithSeed(q) }%
        </p>
        <p className="text-muted pb-5">"{ q }"</p>
        <div>
          <a className="text-info" href="/">Try another info</a>
        </div>
      </div>
    );
  }
}
