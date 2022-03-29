import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function MonthDays(props: PropTypes) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Month dT={props.dT} month="Jan 2" />
      <Month dT={props.dT} month="Jan 3" />
      <Month dT={props.dT} month="Jan 4" />
    </ScrollView>
  );
}

const Month = (props: any) => {
  const width = useWindowDimensions().width;

  const TABWIDTH = (width - 16) / 3;
  return (
    <View style={[tailwind(''), {width: TABWIDTH}]}>
      <View
        style={[
          tailwind('rounded py-2'),
          {marginRight: 8},
          props.dT ? ss.dbdr : ss.lbdr,
          props.dT ? clr.bgd2 : clr.bgw,
        ]}>
        <Text
          style={[
            tailwind('font-bold text-center font-16'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          {props.month}
        </Text>
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  dbdr: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderWidth: 1,
  },
  lbdr: {
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderWidth: 1,
  },
});
