import React from 'react';
import tailwind from '../../../../tailwind';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function BottomAction(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-center')]}>
      <LinearGradient
        end={{x: 0.0, y: 0.5}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row  m-2 rounded')]}
        colors={['#1C2B46', '#172338']}>
        <TouchableOpacity style={[tailwind('px-8 py-3')]}>
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
        <TouchableOpacity style={[tailwind('px-8 py-3')]}>
          <Text style={[tailwind('font-bold uppercase text-light font-12')]}>
            Continue
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
