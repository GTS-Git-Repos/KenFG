import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  name: string;
}

export default function MatchGroundTopBar(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('flex-row items-center px-3 pt-2')]}>
        <Icon name="close" color="white" size={25} />
        <Text
          numberOfLines={1}
          style={[tailwind('font-semibold px-3 uppercase text-light font-15')]}>
          {props.name}
        </Text>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('mx-3 my-2')]}
        colors={['#162339', '#29344B', '#162339']}>
        <View style={[tailwind(''), {height: 2}]}></View>
      </LinearGradient>
    </View>
  );
}