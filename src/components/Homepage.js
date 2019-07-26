import React from 'react';
import { navigate } from '@reach/router';

export default function Homepage () {
  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/result?q=${event.target.q.value}`);
  }

  return (
    <div>
      <h1 className="font-weight-bold text-info">InfoMeter</h1>
      <p>Check your info now!</p>
      <form action="/result" method="get" onSubmit={ handleSubmit }>
        <div className="form-group">
          <input className="form-control form-control-lg"
              type="text" name="q" required
              placeholder="e.g. &quot;Kate loves me&quot;" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info btn-lg">Check</button>
        </div>
      </form>
    </div>
  );
}
