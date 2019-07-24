import React from 'react';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="font-weight-bold text-info">InfoMeter</h1>
        <p>Check your info now!</p>
        <form action="/result" method="get">
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
}
