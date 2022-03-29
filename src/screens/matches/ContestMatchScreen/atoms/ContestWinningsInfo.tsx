import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function ContestWinningsInfo(props: PropTypes) {
  const dT = props.dT;

  return (
    <View style={[tailwind('flex-row items-center p-4')]}>
      <View style={[tailwind(''), {flex: 12 / 4}]}>
        <Text
          style={[tailwind('font-regular  font-14'), dT ? clr.td2 : clr.td1]}>
          Prize pool
        </Text>
        <Text
          style={[tailwind('font-bold py-1 font-16'), dT ? clr.td2 : clr.td1]}>
          {'\u20B9'} 12.50 Lakhs
        </Text>
      </View>

      <View
        style={[
          tailwind('flex-row justify-center'),
          {flex: 12 / 4, position: 'relative', left: 16},
        ]}>
        <View>
          <Text
            style={[
              tailwind('font-regular text-center font-14'),
              dT ? clr.td2 : clr.td1,
            ]}>
            Spots
          </Text>
          <Text
            style={[
              tailwind('font-bold py-1 font-16'),
              dT ? clr.td2 : clr.td1,
            ]}>
            16,000
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 12 / 4}]}>
        <View>
          <Text
            style={[
              tailwind(
                'font-regular text-right font-14',
                dT ? clr.td2 : clr.td1,
              ),
            ]}>
            Entry
          </Text>
          <Text
            style={[
              tailwind('font-bold py-1 font-16'),
              dT ? clr.td2 : clr.td1,
            ]}>
            {'\u20B9'} 125
          </Text>
        </View>
      </View>
    </View>
  );
}
