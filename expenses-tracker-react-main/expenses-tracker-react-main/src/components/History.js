import React, { Component } from 'react';
import { Consumer } from '../context';

export default class History extends Component {
  render() {
    return (
      <React.Fragment>
        <Consumer>
          {(value) => {
            const { transactions, dispatch } = value;
            return (
              <div className="history-cont">
                <h3>History</h3>
                {transactions.map((trans) => {
                  var clr = '#79d70f',
                    sym = '+';
                  if (trans.mode === 'expense') {
                    clr = '#d32626';
                    sym = '';
                  }
                  return (
                    <div className="his-con" key={trans.id}>
                      <i
                        className="fas fa-times"
                        onClick={() => {
                          const action = {
                            type: 'DELETE',
                            payload: trans,
                          };
                          dispatch(action);
                        }}
                      ></i>
                      <div
                        className="his-elem"
                        style={{ borderRight: `5px solid ${clr}` }}
                      >
                        <div className="elem-name">{trans.name}</div>
                        <div className="elem-amnt">
                          {sym}
                          {trans.amount}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        </Consumer>
      </React.Fragment>
    );
  }
}
