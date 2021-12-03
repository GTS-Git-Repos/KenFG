import React from 'react';
import tailwind from '../../../../tailwind';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  text?: string;
}

export default function CapSelectionAction(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('flex-row items-center justify-center')]}>
      <LinearGradient
        end={{x: 0.0, y: 0.5}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row  m-2 rounded')]}
        colors={['#1C2B46', '#172338']}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MatchGroundScreen')}
          style={[tailwind('px-8 py-3')]}>
          <Text style={[tailwind('font-bold uppercase text-light font-12')]}>
            Team Preview
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        end={{x: 0.0, y: 0.2}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row  m-2 rounded')]}
        colors={['#00513B', '#006A4D']}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LiveMatchScreen')}
          style={[tailwind('px-8 py-3')]}>
          <Text style={[tailwind('font-bold uppercase text-light font-12')]}>
            Save Team
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
