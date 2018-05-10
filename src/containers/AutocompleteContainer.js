import { connect } from 'react-redux';
import {
  fetchAutocomplete,
  fetchAutocompleteSuccess,
  fetchAutocompleteFailure
} from '../actions/autocomplete';
import StopAreaAutocomplete from '../components/StopAreaAutocomplete';

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

export default connect(mapStateToProps, mapDispatchToProps)(
  StopAreaAutocomplete
);
