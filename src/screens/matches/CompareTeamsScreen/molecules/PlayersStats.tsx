import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import ComparePlayerProfile from '../atoms/ComparePlayerProfile';

interface PropTypes {
  title: string;
  points: number;
  ahead: boolean;
}

export default function PlayerStats(props: PropTypes) {
  return (
    <View style={[tailwind('py-3 bg-dark-3')]}>
      <View style={[tailwind('flex-row px-1 justify-between items-center')]}>
        <View style={[tailwind('border-r border-gray-700'), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={false}
          />
        </View>
        {/* <View style={[tailwind('bg-red-500'), {flex: 0.5}]}></View> */}
        <View style={[tailwind(''), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={true}
          />
        </View>
      </View>
      <View style={[tailwind('flex-row px-1 justify-between items-center')]}>
        <View style={[tailwind('border-r border-gray-700'), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={false}
          />
        </View>
        {/* <View style={[tailwind(''), {flex: 0.5}]}></View> */}
        <View style={[tailwind(''), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={true}
          />
        </View>
      </View>
    </View>
  );
}
