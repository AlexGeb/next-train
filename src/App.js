import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopAreaAutocomplete from './components/StopAreaAutocomplete';
import NextDepartures from './components/NextDepartures';
import styled from 'styled-components';
import { fetchDepartures } from './actions/departures';
import { getStopAreaInfo } from './services/api-sncf';
import { setSelectedStopArea } from './actions/stopArea';
import * as moment from 'moment';
const Wrapper = styled.div``;

const AutocompleteWrapper = styled.div`
  padding: 20px;
`;

const Heure = styled.div`
  position: fixed;
  top: -40pt;
  right: 8pt;
  width: 5em;
  padding: 0.2em;
  padding-top: 40pt;
  margin: 0;
  background-color: navy;
  border-radius: 0.56em;
  border: white 0.18em solid;
  font-size: 125%;
  z-index: 1;
  cursor: default;
  text-align: center;
`;

class App extends Component {
  state = { time: moment() };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ time: moment() });
    }, 1000);
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
        <Heure>{this.state.time.format('LTS')}</Heure>
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
