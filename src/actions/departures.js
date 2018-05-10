import { getNextDepartures } from '../services/api-sncf';
//Fetch departures
export const FETCH_DEPARTURES = 'FETCH_DEPARTURES';
export const FETCH_DEPARTURES_SUCCESS = 'FETCH_DEPARTURES_SUCCESS';
export const FETCH_DEPARTURES_FAILURE = 'FETCH_DEPARTURES_FAILURE';

export const fetchDepartures = stop_area_id => {
  const request = getNextDepartures(stop_area_id).then(resp => {
    return Promise.resolve(
      resp.departures
        .filter(d => d.display_informations.network === 'RER')
        .sort((d1, d2) =>
          d1.display_informations.label.localeCompare(
            d2.display_informations.label
          )
        )
    );
  });
  return {
    type: FETCH_DEPARTURES,
    payload: request
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
