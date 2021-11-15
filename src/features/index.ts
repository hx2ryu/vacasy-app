import {combineReducers} from 'redux';
import wordReducer from './wordbook/slice';

const rootReducer = combineReducers({word: wordReducer});
export default rootReducer;
