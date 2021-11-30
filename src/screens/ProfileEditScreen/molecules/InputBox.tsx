import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  value: any;
  onChangeText: any;
  onBlur:any,
}

export default function InputBox(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row bg-dark-3 items-center'),
        {
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#B2933D',
          borderWidth: 1,
          borderStyle: 'solid',
        },
      ]}>
      <View
        style={[
          {
            flex: 7,
          },
        ]}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          style={[
            tailwind('flex-grow text-light'),
            {
              height: 50,
            },
          ]}
        />
      </View>
      {/* <TouchableOpacity

        style={[tailwind('flex-row justify-end px-3'), {flex: 3}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
          Change
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}
