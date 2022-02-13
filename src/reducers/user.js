const userReducer = (state = null, action) => {
  if (action.type === 'addUser') {
    return (state = action.payload);
  } else if (action.type === 'removeUser') {
    return (state = null);
  } else {
    return state;
  }
};

export default userReducer;
