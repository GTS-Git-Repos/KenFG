import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';

import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents';
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
      {/* <PromoNotification />
      <PromoNotification />
      <PromoNotification /> */}

      <View style={[tailwind(''), {paddingVertical: 59}]}>
        <Text style={[tailwind('font-bold text-center text-white font-18')]}>
          You have no Notifications
        </Text>
        <View style={[tailwind('flex-row pt-2 justify-center')]}>
          <Image
            resizeMode="contain"
            source={assets.coin}
            style={{width: '90%', height: 142}}
          />
        </View>
        <Text
          style={[
            tailwind('font-regular text-center mx-7 text-white font-14'),
          ]}>
          check back later
        </Text>
      </View>

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
