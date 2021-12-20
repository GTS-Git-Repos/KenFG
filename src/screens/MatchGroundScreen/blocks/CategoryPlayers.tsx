import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  players: any;
}

interface PlayerPropTypes {
  image: string;
  name: string;
  amount: string;
  team1: boolean;
}

export default function CategoryPlayers(props: PropTypes) {
  return (
    <View style={[tailwind('py-2')]}>
      <View style={[tailwind('')]}>
        <Text
          style={[
            tailwind('font-regular text-light text-center font-12 py-1'),
          ]}>
          {props.title}
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[tailwind('mx-28 my-1')]}
          colors={['#8797B1', '#FFFFFF', '#FFFFFF', '#8797B1']}>
          <View style={[tailwind(''), {height: 1}]}></View>
        </LinearGradient>
      </View>

      <View
        style={[tailwind('flex-row justify-center flex-wrap items-center')]}>
        {props.players.map(item => {
          return (
            <PlayerProfile
              key={item.key}
              team1={item.team_key === 'eng'}
              image={''}
              name={item.name}
              amount={'8.4 crore'}
            />
          );
        })}
      </View>
    </View>
  );
}

const PlayerProfile = (props: PlayerPropTypes) => {
  return (
    <View style={[tailwind('flex-col px-4 py-1 items-center')]}>
      <Image
        resizeMode="contain"
        source={assets.player}
        style={[tailwind(''), {width: 48, height: 48}]}
      />
      <Name team1={props.team1} name={props.name} />
      <Text style={[tailwind('font-regular font-7 text-light')]}>
        {props.amount}
      </Text>
    </View>
  );
};

const Name = (props: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[
        tailwind('rounded-xl px-1 bottom-1 py-0.5 border-2 border-green-600'),
      ]}
      colors={props.team1 ? ['#172338', '#254987'] : ['#73221D', '#172338']}>
      <Text style={[tailwind('font-bold text-light text-center font-10')]}>
        {props.name}
      </Text>
    </LinearGradient>
  );
};
