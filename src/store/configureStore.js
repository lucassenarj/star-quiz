import { createStore, combineReducers } from 'redux';
import scoreReducer from '../reducers/score';
import rankReducer from '../reducers/rank';

export default () => {
  const store = createStore(
    combineReducers({
      score: scoreReducer,
      rank: rankReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}