import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {resetDrawerNavigation, resetAuthNavigation} from '../../utils/resetNav';
import assets from '../../constants/assets_manifest';
import {getToken} from '../../utils/authTokenUtils';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function InitialScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        resetDrawerNavigation(navigation);
      } else {
        resetAuthNavigation(navigation);
      }
    })();
  }, []);

  return (
    <View
      style={tailwind('h-full bg-dark flex-col items-center justify-center')}>
      <View style={[tailwind('')]}>
        <Image
          resizeMode="contain"
          source={assets.logo_new}
          style={[{width: 250, height: 250}]}
        />
      </View>
    </View>
  );
}
