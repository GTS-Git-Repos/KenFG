import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {
  TopBar,
  BlockScreenByLoading,
  ButtonComponent,
} from '../../sharedComponents';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox} from '../../utils/snakBars';
import OTPInput from './molecules/OTPInput';
import {otpVerifyRemote} from '../../remote/authRemote';
import {saveToken} from '../../utils/authTokenUtils';
import LinearGradient from 'react-native-linear-gradient';
import {getUserRemote} from '../../remote/userRemote';
import {resetDrawerNavigation} from '../../utils/resetNav';
import {updateUserInfoAction} from '../../store/actions/userAction';
import {useDispatch} from 'react-redux';
import assets from '../../constants/assets_manifest';
const log = console.log;

export default function OTPScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch();

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
      // log(response);
      if (response) {
        await saveToken(response.jwt);
        // is user is existing ?
        const userResponse = await getUserRemote({
          mobile: route.params?.mobile,
        });
        if (userResponse?.data?.name) {
          dispatch(updateUserInfoAction(userResponse.data));
          resetDrawerNavigation(navigation);
        } else {
          navigation.navigate('FantasyTeamNameScreen', {
            mobile: route?.params?.mobile,
          });
        }
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
      <View style={[tailwind('bg-dark-3 rounded px-3 py-6 py-7')]}>
        <View style={[tailwind('flex-row items-center justify-center')]}>
          <Image
            resizeMode="contain"
            source={assets.logo_new}
            style={[tailwind(''), {width: 91, height: 28}]}
          />
        </View>
        <Text style={[tailwind('font-regular text-dark-1 pt-1 text-center font-12 pt-4')]}>
          Your OTP is : {route?.params?.otp}
        </Text>

        <View
          style={[
            tailwind('mb-0 rounded p-1'),
            {borderBottomColor: '#B2933D'},
          ]}>
          <OTPInput value={otp} onChangeText={setOTP} />
        </View>

        <TouchableOpacity style={[tailwind('my-4')]} onPress={onPressAction}>
          <ButtonComponent text={'CONTINUE'} />
        </TouchableOpacity>
      </View>

      <Text
        style={[tailwind('font-regular text-light py-3 text-center font-15')]}>
        did't receive an OTP ?{' '}
        <Text style={[tailwind('text-green-500 underline')]}>Resend</Text>
      </Text>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
