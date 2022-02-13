# ACTION -> its just a name and argument description

const increment = () => {
return {
type: 'increment',
};
};
<br />
const decrement = (nr) => {
return {
type: 'decrement',
payload: nr,
};
};

# REDUCER -> describe how state transform to next state (its just a function)

const counter = (state = 0, action) => {
if (action.type === 'increment') {
return state + 1;
}
<br />
if (action.type === 'decrement') {
return state - 1;
}
};

# STORE -> Globalized state (store holds all reducers + states)

//combine all reducers with function from redux {combineReducers} chek index file in reducer folder;

<!-- window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() -->

let store = createStore(counter, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
**dispay in the console**
store.subscribe(() => console.log(store.getState()));

# useDispatch -> execute function

import { useSelector, useDispatch } from 'react-redux';
<br />
import { increment,decrement, loggedIN, loggedOut } from './actions';

const dispatch = useDispatch();

<!-- <button onClick={() => dispatch(increment())}>plus</button> -->

store.dispatch(increment()); +1

# import { Provider } from 'react-redux';

// provider wraps all app and share redux states

# import { combineReducers } from 'redux';

import loggedReducer from './isLogged';
<br />
import counterReducer from './counter';
<br />
import { combineReducers } from 'redux';
<br />

// 2 reducers combined in to one reducer with combineReducer function from react library

const allReducers = combineReducers({
counterReducer,
loggedReducer,
});
<br />
export default allReducers;

# import { useSelector } from 'react-redux';

use react states
<br />

const counter = useSelector(state => state.counterReducer);
<br />
const loggedIn = useSelector((state) => state.loggedReducer);
