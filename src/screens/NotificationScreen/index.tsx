import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';

// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import NotificationsToolbar from './atoms/NotificationToolBar';
import PromoNotification from './molecules/PromoNotification';

const log = console.log;

export default function NotificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Notifications'} />
      <NotificationsToolbar />
      <PromoNotification />
      <PromoNotification />
      <PromoNotification />
    </View>
  );
}
