import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIN, loggedOut, userAdd, userRemove } from './actions';

const user = {
  name: 'user',
  password: 'password',
  location: {
    city: 'city',
    street: 'street',
    house: 'house',
    familyMembers: {
      kids: '2',
      mearied: 'mearied',
    },
  },
};

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const loggedIn = useSelector((state) => state.loggedReducer);
  const realUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
      
        <p>counter : {counter}</p>
        <button onClick={() => dispatch(increment())}>plus</button>
        <br />
        <button onClick={() => dispatch(decrement(5))}>-5 minus</button>
        <br />
        <button onClick={() => dispatch(loggedIN())}>login</button>
        <br />
        <button onClick={() => dispatch(loggedOut())}>logout</button>
        <br />
        <button onClick={() => dispatch(userAdd(user))}>add user</button>
        <br />
        <button onClick={() => dispatch(userRemove())}>remove user or logout</button>
        <br />
      </header>
    </div>
  );
}

export default App;
