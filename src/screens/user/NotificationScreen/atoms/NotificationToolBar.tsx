import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MoreIcon, ChartIcon} from '../../../../assets/newIcons';

interface PropTypes {
  filterSheet: any;
  length: number;
}

export default function NotificationsToolbar(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
        You have {props.length || 0} notifications
      </Text>
      <View style={[ss.fr]}>
        <TouchableOpacity onPress={() => props.filterSheet?.current?.open()}>
          <ChartIcon dT={false} />
        </TouchableOpacity>
        {/* <MoreIcon dT={false} /> */}
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#0D1320',
    borderBottomWidth: 1,
    borderColor: 'rgba(31, 41, 55, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  fr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
