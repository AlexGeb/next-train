import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StopAreaAutocomplete from './components/StopAreaAutocomplete';
import NextDeparturesContainer from './containers/NextDeparturesContainer';

class App extends Component {
  state = {};
  render() {
    const { stop_area } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StopAreaAutocomplete
          onSelect={stop_area => {
            this.setState({ stop_area });
          }}
        />
        <NextDeparturesContainer />
      </div>
    );
  }
}

export default App;
