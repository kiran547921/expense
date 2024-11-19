import React, { Component } from 'react';

const context = React.createContext();

export class Provider extends Component {
  state = {
    totalBalance: 1000,
    transactions: [
      {
        id: 1,
        mode: 'income',
        name: 'Cash',
        amount: 300,
      },
      {
        id: 2,
        mode: 'expense',
        name: 'Dairy Milk',
        amount: -40,
      },
    ],
    dispatch: (action) => {
      this.reducer(action);
    },
  };
  reducer = (action) => {
    var { transactions, totalBalance } = this.state;
    const { type, payload } = action;
    if (type === 'NEW') {
      transactions.push(payload);
      totalBalance += payload.amount;
      this.setState({ totalBalance });
      this.setState({ transactions });
    } else if (type === 'DELETE') {
      const delId = payload.id;
      totalBalance -= payload.amount;
      const newTransactions = transactions.filter((trans) => trans.id !== delId);
      this.setState({ totalBalance });
      this.setState({ transactions:newTransactions });
    }
  };
  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
