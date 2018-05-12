import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopAreaAutocomplete from './components/StopAreaAutocomplete';
import NextDepartures from './components/NextDepartures';
import styled from 'styled-components';
import { fetchDepartures } from './actions/departures';
import { getStopAreaInfo } from './services/api-sncf';
import { setSelectedStopArea } from './actions/stopArea';

const Wrapper = styled.div``;

const AutocompleteWrapper = styled.div`
  padding: 20px;
`;

class App extends Component {
  componentDidMount = () => {
    const stopAreaId = window.location.href.split('#')[1];
    if (stopAreaId) {
      getStopAreaInfo(stopAreaId).then(stopArea => {
        this.props.setSelectedArea(stopArea);
        this.props.initData(stopAreaId);
      });
    }
  };
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
const mapDispatchToProps = dispatch => {
  return {
    initData: stopAreaId => dispatch(fetchDepartures(stopAreaId)),
    setSelectedArea: stopArea => dispatch(setSelectedStopArea(stopArea))
  };
};

export default connect(null, mapDispatchToProps)(App);
