const counterReducer = (state = 0, action) => {
  if (action.type === 'increment') {
    return state + 1;
  } else if (action.type === 'decrement') {
    return state - action.payload;
  } else {
    return state;
  }
};

export default counterReducer;
