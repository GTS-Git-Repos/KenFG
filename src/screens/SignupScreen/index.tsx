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

export default function SignupScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Register & Play'} />
      <View
        style={[
          tailwind('bg-primary rounded border border-gray-700  px-3 py-6 m-2'),
        ]}>
        <View
          style={[
            tailwind('bg-gray-700 border-b-2 border-gray-400 mb-3 rounded p-1'),
          ]}>
          <TextInput
            placeholder="Enter or Invite Code"
            placeholderTextColor="lightgray"
            style={[tailwind('font-regular text-gray-400 p-2')]}
          />
        </View>

        <View
          style={[
            tailwind('bg-gray-700 border-b-2 border-gray-400 mb-2 rounded p-1'),
          ]}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="lightgray"
            style={[tailwind('font-regular text-gray-400 p-2')]}
          />
        </View>

        <Text style={[tailwind('font-regular text-gray-400 font-12')]}>
          You will Receive an OTP for Verification
        </Text>

        <TouchableOpacity style={[tailwind('bg-secondary rounded p-3 my-3')]}>
          <Text
            style={[
              tailwind('font-semibold font-15 text-primary text-center'),
              {letterSpacing: 2},
            ]}>
            REGISTER
          </Text>
        </TouchableOpacity>

        <Text
          style={[tailwind('font-regular text-gray-400 text-center font-12')]}>
          By Registering, I agree to KenFG's{' '}
          <Text style={[tailwind('text-green-500 underline')]}>T&Cs</Text>
        </Text>
      </View>
    </View>
  );
}
