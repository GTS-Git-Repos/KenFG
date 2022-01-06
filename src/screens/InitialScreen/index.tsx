import React, {useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {resetDrawerNavigation, resetAuthNavigation} from '../../utils/resetNav';
import assets from '../../constants/assets_manifest';
import {getToken} from '../../utils/authTokenUtils';
import {decodeJwt} from '../../utils/formatters';
import {getUserRemote} from '../../remote/userRemote';
import {useDispatch} from 'react-redux';
import {updateUserInfoAction} from '../../store/actions/userAction';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function InitialScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = await getToken();

      if (token) {
        const {data} = decodeJwt(token);
        //  log(data)
        const userResponse = await getUserRemote({mobile: data.mobile});
        if (userResponse) {
          dispatch(updateUserInfoAction(userResponse.data));
          resetDrawerNavigation(navigation);
        } else {
          resetAuthNavigation(navigation);
        }
      } else {
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
