import React from 'react';
import tailwind from '../../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function MyMatchesTopSection(props: PropTypes) {
  return (
    <View>
      <View
        style={[tailwind('pt-3 px-3 flex-row items-center justify-between')]}>
        <View style={[tailwind('text-left')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
            World T20 Championship
          </Text>
        </View>

        <View style={[tailwind('text-right flex-row items-center')]}>
          <Text style={[tailwind('font-regular text-light px-0.5 font-13')]}>
            2
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
            Team
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 px-0.5 font-13')]}>
            |
          </Text>
          <Text style={[tailwind('font-regular text-light px-0.5 font-13')]}>
            1
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
            Contest
          </Text>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('mx-4 my-1')]}
        colors={['#162339', '#29344B', '#162339']}>
        <View style={[tailwind(''), {height: 2}]}></View>
      </LinearGradient>
    </View>
  );
}
