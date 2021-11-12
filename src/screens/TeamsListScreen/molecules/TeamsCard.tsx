import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Dimensions, Text, ImageBackground} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
interface PropTypes {
  text?: string;
}

const CARDWIDTH = Dimensions.get('window').width;

export default function TeamsCard(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('ml-4 bg-red-300 rounded-lg'),
        {width: CARDWIDTH / 1.2},
      ]}>
      <ImageBackground
        style={[tailwind('w-full  rounded-lg')]}
        source={assets.ground}>
        <Text style={[tailwind('font-regular font-15')]}>HEllo</Text>
      </ImageBackground>
    </View>
  );
}
