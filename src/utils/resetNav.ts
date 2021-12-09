import {CommonActions} from '@react-navigation/native';

export const resetDrawerNavigation = async (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerNav',
        },
      ],
    }),
  );
};

export const resetAuthNavigation = async (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Auth',
        },
      ],
    }),
  );
};

export const resetContestListNavigation = async (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerNav',
        },
        {
          name: 'ContestListScreen',
        },
      ],
    }),
  );
};
