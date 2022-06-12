
import counterReducer from './redux';

import { combineReducers } from 'redux';

// 2 reducer combined in to one reducer with combineReducer function from react library

export const allReducers = combineReducers({
  counterReducer,
});
export default allReducers;