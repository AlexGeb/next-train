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

function* fetchNextDepartures(action) {
  try {
    const departures = yield call(getNextDepartures, action.payload);
    window.location.hash = '#'+action.payload;
    yield put(fetchDeparturesSuccess(departures));
  } catch (e) {
    yield put(fetchDeparturesFailure(e));
  }
}

function* fetchAutocompleteItems(action) {
  try {
    const items = yield call(getPossibleItems, action.payload);
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
