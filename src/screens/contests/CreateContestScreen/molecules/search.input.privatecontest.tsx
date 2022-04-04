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
import clr from '../../../../constants/colors';

interface PropTypes {
  input: string;
  setInput(e: any): any;
  searchContest(): any;
  dT: boolean;
}

export default function SearchInputPrivateContest(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <View style={[{flex: 8}]}>
        <TextInput
          value={props.input}
          placeholder="Enter Contest Code"
          // placeholderTextColor="#FFFFFF5D"
          onChangeText={e => props.setInput(e)}
          style={[ss.input, props.dT ? clr.tw : clr.td1]}
        />
      </View>

      <View
        style={[{flex: 2, flexDirection: 'row', justifyContent: 'flex-end'}]}>
        <TouchableOpacity
          onPress={() => props.setInput('')}
          style={[ss.space1]}>
          <Icon
            name="close-outline"
            size={20}
            color={props.dT ? 'white' : 'black'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.searchContest} style={[ss.space1]}>
          <Icon
            name="search-outline"
            size={20}
            color={props.dT ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
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
    fontFamily: 'Gadugi-Bold',
    fontSize: 16,
    margin: 0,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  space1: {
    paddingHorizontal: 8,
  },
});
