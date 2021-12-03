import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {TopBar, BlockScreenByLoading} from '../../sharedComponents';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox} from '../../utils/snakBars';
import OTPInput from './molecules/OTPInput';
import {otpVerifyRemote} from '../../remote/authRemote';
import {saveToken} from '../../utils/authTokenUtils';
import LinearGradient from 'react-native-linear-gradient';
// import assets from 'assets';
const log = console.log;

export default function OTPScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressAction = async () => {
    try {
      setLoading(true);
      if (otp.length < 4) {
        throw 'Invalid OTP';
      }
      const response = await otpVerifyRemote({
        mobile: route?.params?.mobile,
        otp: otp,
      });
      log(response);
      if (response) {
        await saveToken(response.jwt);
        navigation.navigate('DrawerNav');
      } else {
        throw 'Invalid Response';
      }
    } catch (err) {
      setTimeout(() => {
        errorBox('Invalid OTP');
      }, 500);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    log(route.params);
  }, []);

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
          Your OTP is : {route?.params?.otp}
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
            onPress={onPressAction}
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

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
