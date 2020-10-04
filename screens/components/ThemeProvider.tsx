import React, { ReactNode } from 'react';
import theme from '_theme';
import { ThemeProvider } from 'react-native-simple';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '_selectors/app';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  const isDarkTheme = useSelector(selectIsDarkMode);
  const statusBarStyle = isDarkTheme ? 'light' : 'dark';
  return (
    <ThemeProvider {...{ theme }} darkMode={isDarkTheme}>
      {children}
      <StatusBar style={statusBarStyle} />
    </ThemeProvider>
  );
};
