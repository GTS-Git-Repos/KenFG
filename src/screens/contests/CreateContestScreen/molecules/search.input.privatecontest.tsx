import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  input: string;
  setInput(e: any): any;
}

export default function SearchInputPrivateContest(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <TextInput
        value={props.input}
        placeholder="Enter Contest Code"
        placeholderTextColor="#FFFFFF5D"
        onChangeText={e => props.setInput(e)}
        style={[ss.input]}
      />

      <TouchableOpacity onPress={() => props.setInput('')} style={[ss.space1]}>
        <Icon name="close-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={[ss.space1]}>
        <Icon name="search-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderRadius: 4,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginVertical: 12,
  },
  input: {
    color: 'rgba(255, 255, 255, 1)',
    flexGrow: 1,
    fontFamily: 'gadugi-bold',
    fontSize: 16,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 6,
  },
  space1: {
    paddingHorizontal: 8,
  },
});
