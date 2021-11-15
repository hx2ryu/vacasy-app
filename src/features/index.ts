import {combineReducers} from 'redux';
import wordReducer from './wordbook/slice';
import searchReducer from './wordbook/slice';
import {all} from 'redux-saga/effects';
import {searchSaga} from './search/saga';

const rootReducer = combineReducers({word: wordReducer, search: searchReducer});
export function* rootSaga() {
  yield all([searchSaga]);
}
export default rootReducer;
