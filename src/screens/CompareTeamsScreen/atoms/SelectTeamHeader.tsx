import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text: string;
}

export default function SelectTeamHeader(props: PropTypes) {
  return (
    <LinearGradient
      end={{x: 0.0, y: 0.5}}
      start={{x: 0.8, y: 2.0}}
      style={[tailwind('flex-row rounded-t-xl')]}
      colors={['#B2933D', '#bea14f']}>
      <View style={[tailwind('flex-row items-center p-3')]}>
        <View style={[tailwind('flex-row items-center')]}>
          {/* <Icon name="close" size={24} color="#614920" /> */}
          <Text style={[tailwind('font-bold text-brown-5 font-16')]}>
            {props.text}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
