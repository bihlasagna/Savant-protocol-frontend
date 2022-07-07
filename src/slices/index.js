import { combineReducers } from 'redux';

import LLCReducer from './llcSlice';
import walletReducer from './walletSlice';

export default combineReducers({
  llcCration: LLCReducer,
  walletInfo: walletReducer,
});
