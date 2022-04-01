// app related type definations
export interface AppThemeType {
  dark: boolean;
  /**
   dark mode =>dark background,
   light mode =>lightgray background,
   */
  bg: any;
  /**
   dark mode =>gold background,
   light mode =>red background,
   */
  bg1: any;
  /**
   dark mode =>semi dark background,
   light mode =>white background,
   */
  bg2: any;
  /**
   dark mode =>golden text,
   light mode =>red text,
   */
  txt1: any;
  /**
   dark mode =>white text,
   light mode =>dark text,
   */
  txt2: any;
  /**
   dark mode =>gray text,
   light mode =>gray text,
   */
  txt: any;
}
