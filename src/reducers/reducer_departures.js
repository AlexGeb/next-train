import {
  FETCH_DEPARTURES,
  FETCH_DEPARTURES_FAILURE,
  FETCH_DEPARTURES_SUCCESS
} from '../actions/departures';

const INITIAL_STATE = {
  departuresList: { departures: [], error: null, loading: false }
};

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_DEPARTURES: // start fetching departures and set loading = true
      return {
        ...state,
        departuresList: { departures: [], error: null, loading: true }
      };
    case FETCH_DEPARTURES_SUCCESS: // return list of departures and make loading = false
      return {
        ...state,
        departuresList: {
          departures: action.payload,
          error: null,
          loading: false
        }
      };
    case FETCH_DEPARTURES_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        departuresList: { departures: [], error: error, loading: false }
      };
    default:
      return state;
  }
};
