import React, {useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  resetDrawerNavigation,
  resetAuthNavigation,
} from '../../../utils/resetNav';
import assets from '../../../constants/assets_manifest';
import {getToken} from '../../../utils/authTokenUtils';
import {decodeJwt} from '../../../utils/comman';
import {getUserRemote} from '../../../remote/userRemote';
import {useDispatch} from 'react-redux';
import {updateUserInfoAction} from '../../../store/actions/userAction';
import {upcommingMatchesandBannersRemote} from '../../../remote/matchesRemote';
const log = console.log;

export default function InitialScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const token = await getToken();
        if (!token) {
          throw 'user is not logged';
        }
        const {data}: any = decodeJwt(token);
        const userResponse = await getUserRemote({mobile: data.mobile});
        if (!userResponse) {
          throw 'failed to get user info';
        }
        // queryClient.prefetchQuery(
        //   ['lobby', data.mobile],
        //   upcommingMatchesandBannersRemote,
        // );
        dispatch(updateUserInfoAction(userResponse.data));
        resetDrawerNavigation(navigation);
      } catch (err) {
        resetAuthNavigation(navigation);
      }
    })();
  }, []);

  return (
    <View
      style={tailwind('h-full bg-dark-4 flex-col items-center justify-center')}>
      <View style={[tailwind('')]}>
        <Image
          resizeMode="contain"
          source={assets.logo_new}
          style={[{width: 250, height: 100}]}
        />
        <View style={[tailwind('my-3')]}>
          <ActivityIndicator color="#d1b45a" size={'large'} />
        </View>
      </View>
    </View>
  );
}
