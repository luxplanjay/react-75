import { createSlice } from '@reduxjs/toolkit';

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'ua',
  },
  reducers: {
    changeLang: {
      reducer(state, action) {
        state.lang = action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: {
            google: true,
          },
        };
      },
    },
  },
});

export const { changeLang } = localeSlice.actions;

export const localeReducer = localeSlice.reducer;
