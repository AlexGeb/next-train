import React, { Component } from 'react';
import { getNextDepartures } from '../services/api-sncf';
import Departure from './Departure';
import DepartureListHeader from './DepartureListHeader';
import DeparturesList from './DeparturesList';
import { connect } from 'react-redux';

class NextDepartures extends Component {
  state = { departures: [] };
  reRenderAll = () => {
    const { stop_area_id } = this.props;
    console.log('render component with stop_area props : ', stop_area_id);
    getNextDepartures(stop_area_id).then(resp => {
      const departures = resp.departures
        .filter(d => d.display_informations.network === 'RER')
        .sort((d1, d2) =>
          d1.display_informations.label.localeCompare(
            d2.display_informations.label
          )
        );
      this.setState({ departures });
    });
  };

  render() {
    const { stopArea, departures } = this.props;
    if (departures.loading) { return <div>Loading...</div> }
    if (departures.error) { return <div>Error</div> }
    return (
      <div>
        <DepartureListHeader stopArea={stopArea} />
        <DeparturesList departures={departures.departuresList} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    stopArea: state.stopArea,
    departures: state.departures
  }
}
export default connect(mapStateToProps)(NextDepartures);
