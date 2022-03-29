import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  useWindowDimensions,
} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function WeekDays(props: PropTypes) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Weak dT={props.dT} info="18th Oct to 24th Oct" />
      <Weak dT={props.dT} info="18th Oct to 24th Oct" />
      <Weak dT={props.dT} info="18th Oct to 24th Oct" />
      <Weak dT={props.dT} info="18th Oct to 24th Oct" />
    </ScrollView>
  );
}

const Weak = (props: any) => {
  const width = useWindowDimensions().width;
  const dT = props.dT;
  const TABWIDTH = (width - 16) / 3;

  return (
    <View style={[{width: TABWIDTH}]}>
      <View
        style={[
          tailwind('rounded py-2'),
          {marginRight: 8},
          dT ? ss.dbdr : ss.lbdr,
        ]}>
        <Text
          style={[
            tailwind('font-bold text-center font-16'),
            dT ? clr.tw : clr.td1,
          ]}>
          Week {props.count}
        </Text>
        <Text
          style={[
            tailwind('font-regular text-center font-10'),
            dT ? clr.td2 : clr.td1,
          ]}>
          {props.info}
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
