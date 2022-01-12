import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  addMoneySheet: any;
}

export default function AddMoneyButtonWallet(props: PropTypes) {
  return (
    <View style={[tailwind('mx-4')]}>
      <TouchableOpacity
        onPress={() => props.addMoneySheet?.current.open()}
        style={[
          tailwind(
            'py-4 bg-green my-2 rounded flex-grow flex-row justify-center',
          ),
        ]}>
        <Text
          style={[
            tailwind('font-bold text-center uppercase text-light font-12'),
          ]}>
          Add Cash
        </Text>
      </TouchableOpacity>
    </View>
  );
}
