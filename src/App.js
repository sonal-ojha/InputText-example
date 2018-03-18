import React, { Component } from 'react';
import './App.css';
import InputMirror from './inputMirror';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <h1> Enter Text example</h1>
        <InputMirror store={store}/>
      </div>
    );
  }
}

export default App;
