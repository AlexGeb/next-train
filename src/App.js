import React, { Component } from 'react';
import logo from './logo.svg';
import StopAreaAutocomplete from './components/StopAreaAutocomplete';
import NextDepartures from './components/NextDepartures';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  padding: 20px 0;
  text-align: center;
`;

class App extends Component {
  state = {};
  render() {
    const { stop_area } = this.state;
    return (
      <Wrapper>
        <StopAreaAutocomplete
          onSelect={stop_area => {
            this.setState({ stop_area });
          }}
        />
        <NextDepartures />
      </Wrapper>
    );
  }
}

export default App;
