import { createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

const INIT: { isDarkMode: boolean } = { isDarkMode: false };

const appSlice = createSlice({
  name: 'app',
  initialState: INIT,
  reducers: {
    switchDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state, action) => {
      const persisted =
        action.payload && action.payload.app
          ? action.payload.app
          : {};
      return { ...state, ...persisted };
    },
  },
});

export const { switchDarkMode } = appSlice.actions;

export default appSlice.reducer;
