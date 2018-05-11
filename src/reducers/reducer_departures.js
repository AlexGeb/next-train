import {
  FETCH_DEPARTURES,
  FETCH_DEPARTURES_FAILURE,
  FETCH_DEPARTURES_SUCCESS,
  fetchDeparturesSuccess,
  fetchDeparturesFailure
} from '../actions/departures';
const INITIAL_STATE = {
  departuresList: [], error: null, loading: false
};

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_DEPARTURES: // start fetching departures and set loading = true
      return { ...state, loading: true };
    case FETCH_DEPARTURES_SUCCESS: // return list of departures and make loading = false
      console.log('just before returning new state', state)
      return { ...state, departuresList: action.payload, loading: false, error: null };
    case FETCH_DEPARTURES_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, loading: false, error };
    default:
      return state;
  }
};
