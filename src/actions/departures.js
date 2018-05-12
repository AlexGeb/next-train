//Fetch departures
export const FETCH_DEPARTURES = 'FETCH_DEPARTURES';
export const FETCH_DEPARTURES_SUCCESS = 'FETCH_DEPARTURES_SUCCESS';
export const FETCH_DEPARTURES_FAILURE = 'FETCH_DEPARTURES_FAILURE';

export const fetchDepartures = stop_area_id => {
  return {
    type: FETCH_DEPARTURES,
    payload: stop_area_id
  };
};

export function fetchDeparturesSuccess(departures) {
  return {
    type: FETCH_DEPARTURES_SUCCESS,
    payload: departures
  };
}

export function fetchDeparturesFailure(error) {
  return {
    type: FETCH_DEPARTURES_FAILURE,
    payload: error
  };
}
