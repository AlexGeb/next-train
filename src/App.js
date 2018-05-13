import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopAreaAutocomplete from './components/StopAreaAutocomplete';
import NextDepartures from './components/NextDepartures';
import Hour from './components/Hour';
import { fetchDepartures } from './actions/departures';
import { getStopAreaInfo } from './services/api-sncf';
import { setSelectedStopArea } from './actions/stopArea';

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
      <div>
        <Hour />
        <StopAreaAutocomplete />
        <NextDepartures />
      </div>
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
