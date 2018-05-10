import {
  FETCH_AUTOCOMPLETE,
  FETCH_AUTOCOMPLETE_FAILURE,
  FETCH_AUTOCOMPLETE_SUCCESS
} from '../actions/autocomplete';

const INITIAL_STATE = {
  autocomplete: { items: [], error: null, loading: false }
};

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_AUTOCOMPLETE:
      return {
        ...state,
        autocomplete: { items: [], error: null, loading: false }
      };
    case FETCH_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        autocomplete: {
          items: action.payload,
          error: null,
          loading: false
        }
      };
    case FETCH_AUTOCOMPLETE_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        autocomplete: { items: [], error: error, loading: false }
      };
    default:
      return state;
  }
};
