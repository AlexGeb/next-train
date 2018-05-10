import { combineReducers } from 'redux';
import DeparturesReducer from './reducer_departures';
import AutocompleteReducer from './reducer_autocomplete';

const rootReducer = combineReducers({
  departures: DeparturesReducer,
  autocomplete: AutocompleteReducer
});

export default rootReducer;
