import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import tailwind from '../../../../tailwind';
import {Modalize} from 'react-native-modalize';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import {TopBar} from '../../../sharedComponents';
import NoNotification from './atoms/no.notification';
import Notification from './molecules/notification';
import FilterSheet from './molecules/FilterSheet';
import FilterSheetTitle from './atoms/FilterSheetTitle';
import {NotificationScreenType} from '../../../types/user';
import {ChartIcon} from '../../../assets/newIcons';

const log = console.log;

export default function NotificationScreen(props: NotificationScreenType) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Notifications'} />
      <View style={[ss.tRoot, !dT && ss.lRoot]}>
        <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
          You have {props.ntfi?.length || 0} notifications
        </Text>
        <View style={[ss.fr]}>
          <TouchableOpacity onPress={() => props.filterSheet?.current?.open()}>
            <ChartIcon dT={dT} />
          </TouchableOpacity>
          {/* <MoreIcon dT={false} /> */}
        </View>
      </View>

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
              dT={dT}
            />
          );
        })}

      <Modalize
        ref={props.filterSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        HeaderComponent={<FilterSheetTitle dT={dT} filterSheet={props.filterSheet} />}>
        <FilterSheet dT={dT} />
      </Modalize>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  tRoot: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(31, 41, 55, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  lRoot: {
    borderColor: 'rgba(31, 41, 55, 0.1)',
  },
  fr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
