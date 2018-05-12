import React, { Component } from 'react';
import DepartureListHeader from './DepartureListHeader';
import DeparturesList from './DeparturesList';
import { connect } from 'react-redux';

class NextDepartures extends Component {
  render() {
    const { stopArea, departures } = this.props;
    if (departures.loading) {
      return (
        <img
          alt="loading animation"
          src="http://blog.theodo.fr/wp-content/uploads/2015/12/01.gif"
        />
      );
    }
    if (departures.error) {
      return <span>{departures.error.message}</span>;
    }
    return (
      <div>
        <DepartureListHeader stopArea={stopArea} />
        <DeparturesList departures={departures.departuresList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stopArea: state.stopArea,
    departures: state.departures
  };
};
export default connect(mapStateToProps)(NextDepartures);
