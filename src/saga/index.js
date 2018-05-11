
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchDeparturesSuccess, fetchDeparturesFailure, fetchDepartures, FETCH_DEPARTURES } from '../actions/departures';
import { getNextDepartures } from '../services/api-sncf';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const request = (stop_area_id) => getNextDepartures(stop_area_id).then(resp => {
    return Promise.resolve(
        resp.departures
            // .filter(d => d.display_informations.network === 'RER')
            .sort((d1, d2) =>
                d1.display_informations.label.localeCompare(
                    d2.display_informations.label
                )
            )
    );
});

function* fetchNextDepartures(action) {
    try {
        const departures = yield call(request, action.payload);
        yield put(fetchDeparturesSuccess(departures));
    } catch (e) {
        yield put(fetchDeparturesFailure(e));
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
}

export default saga;