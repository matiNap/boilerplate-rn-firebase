import { createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

const appSlice = createSlice({
  name: 'app',
  initialState: { demo: false },
  reducers: {
    setDemo: (state, action) => {
      state.demo = action.payload;
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

export const { setDemo } = appSlice.actions;

export default appSlice.reducer;
