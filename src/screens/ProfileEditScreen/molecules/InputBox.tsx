import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  value: any;
  onChangeText: any;
  onBlur: any;
}

export default function InputBox(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row bg-dark-3  items-center'), styles.root]}>
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
          style={[tailwind('flex-grow p-0 text-white font-14')]}
        />
      </View>
      <View style={[tailwind(''), {flex: 3}]}></View>
    </View>
  );
}

export const In = () => {
  return <TextInput style={[tailwind('flex-grow bg-dark-3 text-white')]} />;
};

const styles = StyleSheet.create({
  root: {
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8797B14D',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
