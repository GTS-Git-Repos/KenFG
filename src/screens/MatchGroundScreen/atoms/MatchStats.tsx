import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  playersCount: number;
  teamname1: string;
  teamname2: string;
  teamcount1: number;
  teamcount2: number;
  creditsLeft: number;
}

export default function MatchStats(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center  px-2 pb-1')]}>
      <View style={[tailwind('flex-col items-center'), {flex: 3}]}>
        <View style={[tailwind('flex-row items-center py-1')]}>
          <Text style={[tailwind('font-bold text-light font-20')]}>
            {props.teamcount1}
          </Text>
          <Text style={[tailwind('font-regular px-1 text-dark-1 font-20')]}>
            /11
          </Text>
        </View>
        <Text style={[tailwind('font-bold font-10 text-dark-1 uppercase')]}>
          Players
        </Text>
      </View>

      {/* team */}
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 6}]}>
        <TeamTag teamname="IND" team1={true} />

        <Text
          style={[tailwind('font-bold text-light px-2 rounded font-20'), {}]}>
          {props.teamcount1} : {props.teamcount2}
        </Text>

        <TeamTag teamname="NZ" team1={false} />
      </View>

      <View style={[tailwind(''), {flex: 3}]}>
        <View style={[tailwind('py-1 px-2')]}>
          <Text style={[tailwind('font-bold text-right text-light font-20')]}>
            {props.creditsLeft}
          </Text>
        </View>
        <Text
          style={[
            tailwind('font-bold font-10 text-right text-dark-1 uppercase'),
          ]}>
          Credits Left
        </Text>
      </View>
    </View>
  );
}

export const TeamTag = (props: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={props.team1 ? ['#172338', '#254987'] : ['#73221D', '#172338']}
      style={[tailwind('rounded-full px-2 py-1 w-12')]}>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[tailwind('font-bold text-white text-center font-14')]}>
        {props.teamname}
      </Text>
    </LinearGradient>
  );
};
