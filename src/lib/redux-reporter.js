export default store => next => action => {
  console.log('__ACTION__', action);
  let result = next(action);
  console.log('__STATE__', store.getState());
  return result;
};