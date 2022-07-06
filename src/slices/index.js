import { combineReducers } from 'redux';

import LLCReducer from './llcSlice';

export default combineReducers({
  llcCration: LLCReducer,
});
