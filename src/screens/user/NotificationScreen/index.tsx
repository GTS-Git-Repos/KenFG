import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {useGetNotifications} from '../../../shared_hooks/user.hooks';
import NotificationScreen from './notification.screen';

const log = console.log;

export default function NotificationHOC() {
  const navigation = useNavigation();
  const userMeta = useSelector(userInfo);
  const filterSheet = useRef<Modalize>();

  const {ntfi, ntfi_l, ntfi_e, rfNtfi} = useGetNotifications(userMeta.mobile);

  function openNotification(key: string) {}

  return (
    <NotificationScreen
      activeFilter={null}
      updateFilter={() => {}}
      ntfi={ntfi}
      ntfi_l={ntfi_l}
      ntfi_e={ntfi_e}
      openNotification={openNotification}
      refetch={rfNtfi}
      filterSheet={filterSheet}
    />
  );
}
