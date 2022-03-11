import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';

import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents';
import NoNotification from './atoms/no.notification';
import NotificationsToolbar from './atoms/NotificationToolBar';
import Notification from './molecules/notification';
import FilterSheet from './molecules/FilterSheet';
import FilterSheetTitle from './atoms/FilterSheetTitle';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {useGetNotifications} from '../../../shared_hooks/user.hooks';
import {NotificationScreenType} from '../../../types/user';

const log = console.log;

export default function NotificationScreen(props: NotificationScreenType) {
  const navigation = useNavigation();
  const userMeta = useSelector(userInfo);

  const {ntfi, ntfi_l, ntfi_e} = useGetNotifications(userMeta.mobile);

  // if (ntfi) {
  //   return null;
  // }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Notifications'} />
      <NotificationsToolbar filterSheet={props.filterSheet} />
      {props.ntfi === [] && (
        <NoNotification loading={false} error={false} refetch={() => {}} />
      )}
      {props.ntfi &&
        props.ntfi.map((item: any) => {
          return (
            <Notification
              key={item.key}
              id={item.key}
              when={item.time}
              read={item.read}
              type={item.type}
              content={item.content}
            />
          );
        })}

      <Modalize
        ref={props.filterSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        HeaderComponent={<FilterSheetTitle filterSheet={props.filterSheet} />}>
        <FilterSheet />
      </Modalize>
    </View>
  );
}
