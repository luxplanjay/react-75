import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 100,
  },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    goo: {
      reducer(state, action) {},
      prepare(x) {
        return {
          payload: {
            value: x,
          },
        };
      },
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
