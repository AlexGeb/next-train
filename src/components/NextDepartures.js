import React, { Component } from 'react';
import DeparturesList from './DeparturesList';
import { connect } from 'react-redux';

class NextDepartures extends Component {
  render() {
    const { departures } = this.props;
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
    return <DeparturesList departures={departures.departuresList} />;
  }
}

const mapStateToProps = state => {
  return {
    departures: state.departures
  };
};
export default connect(mapStateToProps)(NextDepartures);
