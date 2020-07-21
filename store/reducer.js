import { combineReducers } from 'redux';
import { reducer as headReducer } from '../common/header/store';

export default combineReducers({
  header: headReducer
});