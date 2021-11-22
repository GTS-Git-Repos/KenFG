import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import ComparePlayerProfile from '../atoms/ComparePlayerProfile';

interface PropTypes {
  title: string;
  points: number;
  ahead: boolean;
}

export default function PlayerStats(props: PropTypes) {
  return (
    <LinearGradient
      start={{x: 0.8, y: 1.6}}
      end={{x: 0.0, y: 0.5}}
      locations={[0.6, 0.5]}
      style={[tailwind('py-3')]}
      colors={['#1C2B46', '#172338']}>
      <Text style={[tailwind('font-bold text-center pt-1 text-light font-16')]}>
        {props.title}
      </Text>
      {props.ahead ? (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You are
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.points}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-15')]}>
            pts ahead
          </Text>
        </View>
      ) : (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You are opponents players are
          </Text>
          <Text style={[tailwind('font-bold px-1 text-secondary font-16')]}>
            {props.points}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-15')]}>
            pts ahead
          </Text>
        </View>
      )}
      {/* Players */}
      <View style={[tailwind('flex-row p-1 justify-between items-center')]}>
        <View style={[tailwind(''), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={false}
          />
        </View>
        <View style={[tailwind(''), {flex: 0.5}]}></View>
        <View style={[tailwind(''), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={true}
          />
        </View>
      </View>
      <View style={[tailwind('flex-row p-1 justify-between items-center')]}>
        <View style={[tailwind(''), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={false}
          />
        </View>
        <View style={[tailwind(''), {flex: 0.5}]}></View>
        <View style={[tailwind(''), {flex: 4.5}]}>
          <ComparePlayerProfile
            name={'Kumara'}
            title={'SL Bowl '}
            points={'232'}
            team1={true}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
