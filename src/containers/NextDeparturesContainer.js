import { connect } from 'react-redux';
import {
  fetchDepartures,
  fetchDeparturesSuccess,
  fetchDeparturesFailure
} from '../actions/departures';
import NextDepartures from '../components/NextDepartures';

const mapStateToProps = state => {
  return {
    departuresList: state.departures.departuresList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDepartures: () => {
      dispatch(fetchDepartures()).then(response => {
        !response.error
          ? dispatch(fetchDeparturesSuccess(response.payload.data))
          : dispatch(fetchDeparturesFailure(response.payload.data));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextDepartures);
