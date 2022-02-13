import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement, loggedIN, loggedOut } from './actions';


function App() {
  const counter = useSelector((state) => state.counterReducer);
  const loggedIn = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <p>redux lesson</p>
        <p>counter : {counter}</p>
        <button onClick={() => dispatch(increment())}>plus</button>
        <br />
        <button onClick={() => dispatch(decrement(5))}>-5 minus</button>
        <br />
        <button onClick={() => dispatch(loggedIN())}>login</button>
        <br />
        <button onClick={() => dispatch(loggedOut())}>logout</button>
        <br />
        {loggedIn ? <h1>secret data</h1> : <h4>public data</h4>}
      </header>
    </div>
  );
}

export default App;
