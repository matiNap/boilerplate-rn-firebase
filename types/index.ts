export interface PaletteData {
  primary: string;
  secondary: string;
  text: {
    primary: string;
    secondary: string;
  };
}

export interface ThemeData {
  dark: PaletteData;
  light: PaletteData;
}

export interface TypographyData {
  fontSize: {
    small: number;
    normal: number;
    medium: number;
    big: number;
  };
  font: string;
}
