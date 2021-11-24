import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {TopBar} from '../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../utils/snakBars';
import OTPInput from './molecules/OTPInput';

import LinearGradient from 'react-native-linear-gradient';
// import assets from 'assets';
const log = console.log;

export default function OTPScreen() {
  const navigation = useNavigation<any>();

  const [otp, setOTP] = useState('');

  const navigate = () => {
    if (otp.length === 4) {
      navigation.navigate('Home');
    } else {
      errorBox('Invalid OTP');
    }
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'OTP'} />
      <View
        style={[
          tailwind(
            'bg-dark-3 rounded border border-gray-700  px-3 py-6 mx-3 my-7',
          ),
        ]}>
        <Text style={[tailwind('font-regular pb-3 text-dark-1 font-13')]}>
          OTP Will be received in shortly
        </Text>

        <View
          style={[
            tailwind('bg-dark-2 mb-0 rounded p-1'),
            {borderBottomColor: '#B2933D'},
          ]}>
          <OTPInput value={otp} onChangeText={setOTP} />
        </View>
        <LinearGradient
          end={{x: 0.0, y: 0.5}}
          start={{x: 0.8, y: 2.0}}
          locations={[0.6, 0.5]}
          style={[tailwind('mt-5 rounded p-2')]}
          colors={['#B2933D', '#C5A858']}>
          <TouchableOpacity
            onPress={navigate}
            style={[
              tailwind('flex-row  items-center justify-center  rounded p-1'),
            ]}>
            <Text style={[tailwind('font-bold text-brown-4 px-2 font-18')]}>
              CONTINUE
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <Text
        style={[tailwind('font-regular text-gray-400 text-center font-15')]}>
        did't receive an OTP ?{' '}
        <Text style={[tailwind('text-green-500 underline')]}>Resend</Text>
      </Text>
    </View>
  );
}
