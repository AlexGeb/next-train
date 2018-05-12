import React, { Component } from 'react';
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
  render() {
    return (
      <Wrapper>
        <AutocompleteWrapper>
          <StopAreaAutocomplete />
        </AutocompleteWrapper>
        <NextDepartures />
      </Wrapper>
    );
  }
}

export default App;
