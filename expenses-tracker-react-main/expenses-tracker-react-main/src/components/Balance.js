import React, { Component } from 'react';
import { Consumer } from '../context';

class Balance extends Component {
  render() {
    return (
      <React.Fragment>
        <Consumer>
          {(value) => {
            const { totalBalance } = value;
            return (
              <div className="balance">
                <h3>Your Balance</h3>
                <p>Rs. {totalBalance} /-</p>
              </div>
            );
          }}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default Balance;
