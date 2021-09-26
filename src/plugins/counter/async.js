const asyncFunc = (targetFunc) => (...funcArgs) => (dispatch) => {
  setTimeout(() => {
    dispatch(targetFunc(...funcArgs));
  }, 1000);
};

export default asyncFunc;
