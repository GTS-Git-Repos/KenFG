import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function AddMoneySheet(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-4 p-3')]}>
      <Text style={[tailwind('font-bold uppercase py-2 font-13 text-white')]}>
        Add amount to be added
      </Text>

      <View style={[tailwind('flex-row rounded bg-dark-2 items-center')]}>
        <TextInput
          keyboardType="decimal-pad"
          placeholder="Enter the Amount"
          placeholderTextColor="#8797B1"
          style={[tailwind('p-3 font-regular bg-dark-3 flex-grow rounded')]}
        />
      </View>
      <View style={[tailwind('my-1')]}>
        <TouchableOpacity
          style={[
            tailwind(
              'px-8 py-4 bg-green my-2 rounded flex-grow flex-row justify-center',
            ),
          ]}>
          <Text
            style={[
              tailwind('font-bold text-center uppercase text-light font-12'),
            ]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
