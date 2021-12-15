import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';

// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import NotificationsToolbar from './atoms/NotificationToolBar';
import PromoNotification from './molecules/PromoNotification';
import FilterSheet from './molecules/FilterSheet';
import FilterSheetTitle from './atoms/FilterSheetTitle';

const log = console.log;

export default function NotificationScreen() {
  const navigation = useNavigation();
  const filterSheet = useRef<Modalize>();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Notifications'} />
      <NotificationsToolbar filterSheet={filterSheet} />
      <PromoNotification />
      <PromoNotification />
      <PromoNotification />

      <Modalize
        ref={filterSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        HeaderComponent={<FilterSheetTitle filterSheet={filterSheet} />}>
        <FilterSheet />
      </Modalize>
    </View>
  );
}
