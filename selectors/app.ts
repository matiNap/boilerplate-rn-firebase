import { RootState } from '_store';

export const selectIsDarkMode = (state: RootState) =>
  state.app.isDarkMode;
