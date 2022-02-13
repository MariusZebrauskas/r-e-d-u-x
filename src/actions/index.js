export const increment = () => {
  return {
    type: 'increment',
  };
};
export const decrement = (nr) => {
  return {
    type: 'decrement',
    payload: nr,
  };
};
export const loggedIN = () => {
  return {
    type: 'logged-in',
  };
};
export const loggedOut = () => {
  return {
    type: 'logged-out',
  };
};
