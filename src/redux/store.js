import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

const gaMiddleware = store => next => action => {
  if (action?.meta?.google) {
    console.log(action);
    console.log('GA.send(action)');
  }
  next(action);
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware();

    return [...defaultMiddleware, gaMiddleware];
  },
});

// const increment = value => {
//   return {
//     type: 'increment',
//     payload: value,
//   };
// };

// dispatch(increment(5));

// const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/tasks');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

// dispatch(fetchTasks());

// const thunkMiddleware = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//     return;
//   }

//   next(action);
// };
