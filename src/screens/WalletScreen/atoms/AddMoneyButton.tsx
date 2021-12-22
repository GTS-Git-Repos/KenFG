import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  addMoneySheet: any;
}

export default function BluePrintComponent(props: PropTypes) {
  return (
    <View style={[tailwind('my-1')]}>
      {/* <LinearGradient
        end={{x: 0.0, y: 0.2}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row m-2 rounded')]}
        colors={['#00513B', '#006A4D']}
        > */}
      <TouchableOpacity
        onPress={() => props.addMoneySheet?.current.open()}
        style={[
          tailwind(
            'px-8 py-3 bg-green m-2 rounded flex-grow flex-row justify-center',
          ),
        ]}>
        <Text
          style={[
            tailwind('font-bold text-center uppercase text-light font-12'),
          ]}>
          Add Amount
        </Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}
    </View>
  );
}
