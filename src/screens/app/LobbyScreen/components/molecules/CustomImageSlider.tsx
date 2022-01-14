import React from 'react';
import tailwind from '../../../../../../tailwind';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import assets from '../../../../../constants/assets_manifest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

const WIDTH = Dimensions.get('window').width;

export default function CustomImageSlider(props: PropTypes) {
  return (
    <ScrollView horizontal={true}>
      <View style={[tailwind('flex-row justify-center items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: WIDTH, height: 140}}
        />
      </View>
      <View style={[tailwind('flex-row justify-center items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: WIDTH, height: 140}}
        />
      </View>
    </ScrollView>
  );
}
