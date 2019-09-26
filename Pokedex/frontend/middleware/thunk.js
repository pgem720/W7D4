const thunk = function(store) {
  return function(next) {
    return function(action) {
      if (typeof action === 'function') {
        debugger
        return action(store.dispatch, store.getState);
      }
      debugger
      return next(action);
    };
  };
};

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//         return action(store.dispatch, store.getState);
//   }
//   return next(action);
// }

export default thunk;