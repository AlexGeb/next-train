import { SELECT_STOP_AREA } from '../actions/stopArea';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_STOP_AREA:
      return action.payload;
    default:
      return state;
  }
};
