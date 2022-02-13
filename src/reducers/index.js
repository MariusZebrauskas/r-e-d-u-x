import loggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';



// 2 reducer combined in to one reducer with combineReducer function from react library

const allReducers = combineReducers({
  counterReducer,
  loggedReducer,
});
export default allReducers;
