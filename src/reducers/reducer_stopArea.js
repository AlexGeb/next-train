import { SELECT_STOP_AREA } from '../actions/stopArea';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_STOP_AREA:
      document.title = action.payload.name.replace('Gare de ', '');
      return action.payload;
    default:
      return state;
  }
};
