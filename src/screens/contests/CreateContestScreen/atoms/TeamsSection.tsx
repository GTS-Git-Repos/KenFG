import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  match_name: string;
  team_a: string;
  team_b: string;
  start_at: string;
}

export default function TeamsSection(props: PropTypes) {
  return (
    <View style={[tailwind('py-3 px-9')]}>
      <Text style={[tailwind('font-bold text-white text-center font-13')]}>
        {props.match_name}
      </Text>
      <View
        style={[tailwind('pt-3 pb-2 flex-row items-center justify-between')]}>
        <Team1 team_a={props.team_a} />
        <Text style={[tailwind('font-bold text-center text-white font-12')]}>
          VS
        </Text>
        <Team2 team_b={props.team_b} />
      </View>
      <Text style={[tailwind('font-regular text-center text-dark-1 font-12')]}>
        {props.start_at} left
      </Text>
    </View>
  );
}

const Team1 = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <Image
        resizeMode="contain"
        source={assets.AUS}
        style={{width: 45, height: 25}}
      />
      <View style={[tailwind('px-3')]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#172338', '#254987']}
          style={[tailwind('rounded-full p-0.5 px-2')]}>
          <Text
            style={[
              tailwind(`font-bold text-white uppercase font-12 text-right`),
            ]}>
            {props.team_a}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const Team2 = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View style={[tailwind('px-3')]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#872525', '#0D1320']}
          style={[tailwind('rounded-full p-0.5 px-2')]}>
          <Text
            style={[
              tailwind(`font-bold text-white uppercase font-12 text-right`),
            ]}>
            {props.team_b}
          </Text>
        </LinearGradient>
      </View>
      <Image
        resizeMode="contain"
        source={assets.ENG}
        style={{width: 45, height: 25}}
      />
    </View>
  );
};
