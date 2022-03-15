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

// not used anywhere, need to remove later
export const resetSecondInningsContestListNavigation = async (
  navigation: any,
  route_params: any,
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerNav',
        },
        {
          name: 'SecondInningsContest',
          params: route_params,
        },
      ],
    }),
  );
};

// not used anywhere, need to remove later
export const resetContestListNavigation = async (
  navigation: any,
  route_params: any,
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerNav',
        },
        {
          name: 'Contest',
          params: route_params,
        },
      ],
    }),
  );
};

export const reset2ndInningsNavigation = async (
  navigation: any,
  route_params: any,
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerNav',
        },
        {
          name: 'SecondInningsContest',
          params: route_params,
        },
      ],
    }),
  );
};
