import React, { Component } from 'react';
import { Consumer } from '../context';

const initial = {
  name: '',
  amount: '',
};

export default class Newtransaction extends Component {
  state = initial;
  onSubmit = (dispatch, transactions, e) => {
    e.preventDefault();
    var id = transactions.length + 1;
    var { name, amount } = this.state;
    var mode = 'income';
    var num = Number(amount);
    if (amount < 0) {
      mode = 'expense';
    }
    const newTransaction = {
      id,
      mode,
      name,
      amount: num,
    };
    const action = {
      type: 'NEW',
      payload: newTransaction,
    };
    dispatch(action);
    var form = document.getElementById('form-trans');
    var plus = document.querySelector('.fa-plus');

    form.style.display = 'none';
    plus.style.transform = 'rotate(0deg)';
    this.setState(initial);
  };
  onChange = (e) => {
    var temp = e.target.value;
    this.setState({ [e.target.name]: temp });
  };

  render() {
    var i = 0;
    const { name, amount } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { transactions, dispatch } = value;
          return (
            <div className="history-cont">
              <h3>
                New Transaction
                <i
                  className="fa fa-plus"
                  style={{ float: 'right', cursor: 'pointer' }}
                  aria-hidden="true"
                  onClick={() => {
                    var form = document.getElementById('form-trans');
                    var plus = document.querySelector('.fa-plus');
                    if (i % 2 === 0) {
                      form.style.display = 'flex';
                      plus.style.transform = 'rotate(45deg)';
                    } else {
                      form.style.display = 'none';
                      plus.style.transform = 'rotate(0deg)';
                    }
                    i++;
                  }}
                ></i>
              </h3>
              <form
                id="form-trans"
                onSubmit={this.onSubmit.bind(this, dispatch, transactions)}
              >
                <strong>
                  <label>For :</label>
                </strong>
                <input
                  type="text"
                  name="name"
                  style={{
                    width: '50%',
                    padding: '.4rem',
                    marginBottom: '1rem',
                  }}
                  value={name}
                  onChange={this.onChange}
                  required
                />
                <strong>
                  <label>Amount :</label>
                </strong>
                <p style={{ fontSize: '.7rem' }}>
                  (Add prefix as '+' for income and '-' for expense )
                </p>
                <input
                  type="number"
                  name="amount"
                  style={{
                    width: '50%',
                    padding: '.4rem',
                    marginBottom: '1rem',
                  }}
                  value={amount}
                  onChange={this.onChange}
                  required
                />
                <input
                  className="button"
                  type="submit"
                  style={{
                    width: '15%',
                    padding: '.4rem',
                    marginBottom: '1rem',
                  }}
                  value="Submit"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
