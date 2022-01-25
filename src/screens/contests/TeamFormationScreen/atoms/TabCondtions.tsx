import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import {DownArrowIcon} from '../../../../sharedComponents';

interface PropTypes {
  filterSheet: any;
  filters: any;
  text: string;
}

export default function TopConditions(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center justify-between px-4 pt-2 pb-1 border-b border-gray-800',
        ),
      ]}>
      <Text style={[tailwind('font-regular font-13 text-dark-1')]}>
        {props.text}
      </Text>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity
          onPress={() => {
            props.filterSheet?.current?.open();
          }}
          style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.filter}
            style={[tailwind(''), {width: 20, height: 20}]}
          />
        </TouchableOpacity>
        {props.filters !== null && (
          <View
            style={[
              tailwind(
                'w-2 h-2 rounded-full bg-red-600 absolute  right-0 top-1',
              ),
              {backgroundColor: '#d1b45a'},
            ]}></View>
        )}
      </View>
    </View>
  );
}
