import { getPossibleItems } from '../services/api-sncf';

//Fetch autocomplete api
export const FETCH_AUTOCOMPLETE = 'FETCH_AUTOCOMPLETE';
export const FETCH_AUTOCOMPLETE_SUCCESS = 'FETCH_AUTOCOMPLETE_SUCCESS';
export const FETCH_AUTOCOMPLETE_FAILURE = 'FETCH_AUTOCOMPLETE_FAILURE';

export const fetchAutocomplete = partial_value => {
  return {
    type: FETCH_AUTOCOMPLETE,
    payload: partial_value
  };
};

export function fetchAutocompleteSuccess(items) {
  return {
    type: FETCH_AUTOCOMPLETE_SUCCESS,
    payload: items
  };
}

export function fetchAutocompleteFailure(error) {
  return {
    type: FETCH_AUTOCOMPLETE_FAILURE,
    payload: error
  };
}
