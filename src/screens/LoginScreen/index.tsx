import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import {TopBar} from '../../sharedComponents';
const log = console.log;

export default function LoginScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'LOG IN'} />
      <View
        style={[
          tailwind('bg-primary rounded border border-gray-700  px-3 py-6 m-2'),
        ]}>
        <View
          style={[
            tailwind('bg-gray-700 border-b-2 border-gray-400 mb-3 rounded p-1'),
          ]}>
          <TextInput
            placeholder="Email or Mobile Number"
            placeholderTextColor="lightgray"
            style={[tailwind('font-regular text-gray-400 p-2')]}
          />
        </View>
        <TouchableOpacity style={[tailwind('bg-secondary rounded p-3 my-3')]}>
          <Text
            style={[
              tailwind('font-semibold font-15 text-primary text-center'),
            ]}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={[tailwind('font-regular text-gray-400 text-center font-15')]}>
        Not a Memeber ?{' '}
        <Text style={[tailwind('text-green-500 underline')]}>Register</Text>
      </Text>
    </View>
  );
}
