import { SimpleTheme } from 'react-native-simple';
import { ThemeConsumer } from 'react-native-elements';
import { Dimensions, Platform, StatusBar } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const metrics = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  windowWidth: WINDOW_WIDTH,
  windowHeight: WINDOW_HEIGHT,
  spacing: {
    small: 5,
    normal: 10,
    medium: 15,
    big: 30,
  },
  headerHeight:
    Platform.OS !== 'ios' && StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 20,
  horizontalSpacing: 10,
  borderRadius: 9,
};

const FONT_SIZE = {
  small: 15,
  content: 17,
  normal: 19,
  medium: 27,
  big: 38,
};

export const typography = {
  primaryFont: 'Rubik_500Medium',
  fontSize: FONT_SIZE,
};

export const actionColors = {
  error: '#e81717',
  warning: '#f7d52a',
  succes: '#20c41d',
};

const ACCENT = '#C212D9';
const theme: SimpleTheme = {
  typography: {
    ...typography,
    fontSize: {
      ...FONT_SIZE,
    },
  },
  palette: {
    accent: ACCENT,
    primary: '#ffffff',
    secondary: '#FFFCF9',
    text: {
      primary: '#2f2f2f',
      secondary: '#f2f2f2',
    },
  },
  paletteDark: {
    accent: ACCENT,
    primary: '#3f3f3f',
    secondary: '#2b2b2b',
    text: {
      secondary: '#2f2f2f',
      primary: '#f2f2f2',
    },
  },
};

export default theme;

export type ThemeType = typeof ThemeConsumer;

export const styleSheet = {
  authIcon: {
    fontSize: 30,
    marginRight: metrics.spacing.small,
  },
};
