import React, {useRef} from 'react';
import {View} from 'react-native';
import tailwind from '../../../../tailwind';
import {Modalize} from 'react-native-modalize';

import {TopBar} from '../../../sharedComponents';
import NoNotification from './atoms/no.notification';
import NotificationsToolbar from './atoms/NotificationToolBar';
import Notification from './molecules/notification';
import FilterSheet from './molecules/FilterSheet';
import FilterSheetTitle from './atoms/FilterSheetTitle';
import {NotificationScreenType} from '../../../types/user';

const log = console.log;

export default function NotificationScreen(props: NotificationScreenType) {
  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Notifications'} />
      <NotificationsToolbar
        filterSheet={props.filterSheet}
        length={props.ntfi?.length}
      />
      <NoNotification
        loading={!props.ntfi}
        error={props.ntfi_e}
        refetch={props.rfNtfi}
        data={props.ntfi}
      />

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
