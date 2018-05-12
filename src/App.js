import React, { Component } from 'react';
import logo from './logo.svg';
import StopAreaAutocomplete from './components/StopAreaAutocomplete';
import NextDepartures from './components/NextDepartures';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const AutocompleteWrapper = styled.div`
  background: linear-gradient(#68c5db, #e0ca3c);
  padding: 20px;
`;

class App extends Component {
  state = {};
  render() {
    const { stop_area } = this.state;
    return (
      <Wrapper>
        <AutocompleteWrapper>
          <StopAreaAutocomplete
            onSelect={stop_area => {
              this.setState({ stop_area });
            }}
          />
        </AutocompleteWrapper>
        <NextDepartures />
      </Wrapper>
    );
  }
}

export default App;
