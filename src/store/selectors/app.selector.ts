// the reselect selectors for match

import {createSelector} from 'reselect';
import clr from '../../constants/colors';
import {AppThemeType} from '../../types/app';

const DarkThemeState = (state: any) => state.app.darkModeEnabled;

export const appTheme = createSelector(
  DarkThemeState,
  (theme: boolean): AppThemeType => {
    if (theme)
      return {
        dark: true,
        // dark
        bg: clr.bgd1,
        //gold
        bg1: clr.bgg,
        //light dark
        bg2: clr.bgd2,
        //gold text
        txt1: clr.tgl,
        //white text
        txt2: clr.tw,
        //light dark text
        txt: clr.td2,
      };
    else {
      return {
        dark: false,

        // light gray
        bg: clr.bgGray,
        //red bg
        bg1: clr.bgRed,
        //white bg
        bg2: clr.bgw,
        // red text
        txt1: clr.tr,
        // dark text
        txt2: clr.td1,
        //   light dark text
        txt: clr.td2,
      };
    }
  },
);
