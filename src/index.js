import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// provider wraps all app and share redux states
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// # ACTION -> its just a name

// const increment = () => {
//   return {
//     type: 'increment',
//   };
// };

// const decrement = () => {
//   return {
//     type: 'decrement',
//   };
// };

// # REDUCER -> describe how state transform to next state (its just a function)

// const counter = (state = 0, action) => {
//   if (action.type === 'increment') {
//     return state + 1;
//   }
//   if (action.type === 'decrement') {
//     return state - 1;
//   }
// };

// # STORE -> Globalized state (store holds all reducers + states)
// let store = createStore(counter);
// dispay in the console
// store.subscribe(() => console.log(store.getState()));

// # DISPACH -> execute function
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
