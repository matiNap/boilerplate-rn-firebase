import { PaletteData, ThemeData } from '_types';
import typography from '_typography';
import { Theme } from 'react-native-elements';
import { Theme as NavigationTheme } from '@react-navigation/native';

export const createNavigationTheme = (
  currentPalette: PaletteData,
  dark: boolean,
): NavigationTheme => {
  const {
    primary,
    secondary,
    text: { primary: textPrimary },
  } = currentPalette;
  return {
    dark,
    colors: {
      card: currentPalette.secondary,
      background: currentPalette.secondary,
      text: textPrimary,
      primary,
      border: secondary,
      notification: primary,
    },
  };
};

export const createElementsTheme = (
  currentPalette: PaletteData,
): Theme<{}> => ({
  Text: {
    style: {
      fontSize: typography.fontSize.normal,
      fontFamily: typography.font,
      color: currentPalette.text.primary,
    },
  },
});

const palette: ThemeData = {
  dark: {
    primary: '#0089f2',
    secondary: '#323031',
    text: {
      primary: '#F2F2F2',
      secondary: '#2F2F2F',
    },
  },
  light: {
    primary: '#0089f2',
    secondary: '#eee',
    text: {
      primary: '#2F2F2F',
      secondary: '#F2F2F2',
    },
  },
};

export default palette;
