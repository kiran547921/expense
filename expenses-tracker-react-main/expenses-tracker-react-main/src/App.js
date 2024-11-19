import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import { Provider } from './context';
import Differentiate from './components/Differentiate';
import History from './components/History';
import Newtransaction from './components/Newtransaction';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header></Header>
        <div className="jumbotron">
          <div className="container">
            <Balance></Balance>
            <Differentiate></Differentiate>
            <Newtransaction></Newtransaction>
            <History></History>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
