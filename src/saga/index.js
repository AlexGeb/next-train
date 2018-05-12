import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchDeparturesSuccess,
  fetchDeparturesFailure,
  FETCH_DEPARTURES
} from '../actions/departures';
import { getNextDepartures, getPossibleItems } from '../services/api-sncf';
import {
  FETCH_AUTOCOMPLETE,
  fetchAutocompleteSuccess,
  fetchAutocompleteFailure
} from '../actions/autocomplete';

const requestDepartures = stop_area_id =>
  getNextDepartures(stop_area_id).then(resp =>
    Promise.resolve(
      resp.departures.sort((d1, d2) =>
        d1.display_informations.label.localeCompare(
          d2.display_informations.label
        )
      )
    )
  );

function* fetchNextDepartures(action) {
  try {
    const departures = yield call(requestDepartures, action.payload);
    yield put(fetchDeparturesSuccess(departures));
  } catch (e) {
    yield put(fetchDeparturesFailure(e));
  }
}

const requestPossibleItems = partial_value =>
  getPossibleItems(partial_value).then(items =>
    Promise.resolve(items.places.map(p => p.stop_area))
  );
function* fetchAutocompleteItems(action) {
  try {
    const items = yield call(requestPossibleItems, action.payload);
    yield put(fetchAutocompleteSuccess(items));
  } catch (e) {
    yield put(fetchAutocompleteFailure(e));
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
*/
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* saga() {
  yield takeLatest(FETCH_DEPARTURES, fetchNextDepartures);
  yield takeLatest(FETCH_AUTOCOMPLETE, fetchAutocompleteItems);
}

export default saga;
