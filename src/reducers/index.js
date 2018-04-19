import { combineReducers } from 'redux';
import balance from './balance';
import interest from './interest';

export default combineReducers({ balance, interest });