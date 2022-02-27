import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {} from 'react-native-gesture-handler';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import {useSelector} from 'react-redux';

interface PropTypes {
  notificationSheet: any;
}

export default function MatchNotificationHead(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[styles.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TouchableOpacity
        onPress={() => props.notificationSheet?.current?.close()}>
        <Icon name="close" size={25} color={dT ? '#FFFFFF' : '#0D1320'} />
      </TouchableOpacity>
      <Text style={[tailwind('font-bold font-14'), dT ? clr.tw : clr.td1]}>
        Set Remainders
      </Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
});
