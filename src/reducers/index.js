import { combineReducers } from 'redux';
import DeparturesReducer from './reducer_departures';
import AutocompleteReducer from './reducer_autocomplete';
import StopAreaReducer from './reducer_stopArea';

const rootReducer = combineReducers({
  departures: DeparturesReducer,
  autocomplete: AutocompleteReducer,
  stopArea: StopAreaReducer
});

export default rootReducer;
