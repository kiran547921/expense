import React, { Component } from 'react'
import { Consumer } from '../context'

export default class Differentiate extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { transactions } = value;
                    var inc = 0 , exp = 0 ;
                    transactions.forEach(elem => {
                        if(elem.mode === 'income'){
                            inc+=elem.amount;
                        }else{
                            exp+=elem.amount;
                        }
                    });
                    return(
                        <div className="diff-container">
                            <div className="inc-exp">
                                <p>Income</p>
                                <span style={{color:'#79d70f'}} >+{inc}</span>
                            </div>
                            <div className="brdr" ></div>
                            <div className="inc-exp">
                            <p>Expense</p>
                            <span style={{color:'#d32626'}} >{exp}</span>
                            </div>
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}
