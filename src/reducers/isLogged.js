const loggedReducer = (state = false, action) => {
  if (action.type === 'logged-in') {
    return (state = true);
  } else if (action.type === 'logged-out') {
    return (state = false);
  } else {
    return state;
  }
};

export default loggedReducer;
