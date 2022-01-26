import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  input: string;
  setInput(e: any): any;
}

export default function SearchInputPrivateContest(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('border-b border-gray-800 mb-3 rounded flex-row items-center'),
      ]}>
      <TextInput
        value={props.input}
        placeholder="Search contest"
        placeholderTextColor="#FFFFFF5D"
        onChangeText={e => props.setInput(e)}
        style={[
          tailwind('m-0 px-2 py-0 text-white font-bold font-16 flex-grow'),
        ]}
      />

      {/* {props.input && (
        <TouchableOpacity
          onPress={() => props.setInput('')}
          style={[tailwind('p-2')]}>
          <Icon name="close-outline" size={20} color="white" />
        </TouchableOpacity>
      )} */}

      <TouchableOpacity style={[tailwind('px-2')]}>
        <Icon name="search-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
