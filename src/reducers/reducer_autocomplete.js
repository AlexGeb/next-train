import {
  FETCH_AUTOCOMPLETE,
  FETCH_AUTOCOMPLETE_FAILURE,
  FETCH_AUTOCOMPLETE_SUCCESS
} from '../actions/autocomplete';

const INITIAL_STATE = { items: [], error: null, loading: false };

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_AUTOCOMPLETE:
      return {
        items: [],
        error: null,
        loading: true
      };
    case FETCH_AUTOCOMPLETE_SUCCESS:
      return {
        items: action.payload,
        error: null,
        loading: false
      };
    case FETCH_AUTOCOMPLETE_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, error, loading: false };
    default:
      return state;
  }
};
