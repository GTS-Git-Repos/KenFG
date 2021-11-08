import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  players: [];
}

interface PlayerPropTypes {
  image: string;
  name: string;
  amount: string;
}

export default function CategoryPlayers(props: PropTypes) {
  return (
    <View style={[tailwind('py-2')]}>
      <Text style={[tailwind('font-regular text-light text-center font-15')]}>
        {props.title}
      </Text>
      <View
        style={[tailwind('flex-row justify-center flex-wrap items-center')]}>
        {props.players.map(item => {
          return (
            <PlayerProfile
              key={item}
              image={''}
              name={'V. Kholi'}
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
        source={assets.playerImage}
        style={[tailwind(''), {width: 60, height: 60}]}
      />
      <Text
        style={[
          tailwind(
            'font-regular bg-black rounded text-light text-center px-2 font-15',
          ),
        ]}>
        {props.name}
      </Text>
      <Text style={[tailwind('font-regular font-15 text-light')]}>{props.amount}</Text>
    </View>
  );
};
