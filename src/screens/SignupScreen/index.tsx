import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox, infoBox} from '../../utils/snakBars';
import {signupRemote} from '../../remote/authRemote';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';

import {TopBar, BlockScreenByLoading} from '../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';
const log = console.log;

export default function SignupScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const [mobile, setMobile] = useState('9876543210');
  const [ref, setRef] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = async () => {
    try {
      setLoading(true);
      const response = await signupRemote({
        mobile,
        ref,
      });
      if (response) {
        navigation.navigate('OTPScreen', {
          mobile,
          otp: response.otp,
        });
      } else {
        errorBox('Failed to create a User, Please check your Internet');
      }
    } catch (err) {
      errorBox('Failed to create a User');
      log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Register & Play'} />
      <View style={[tailwind('bg-dark-3 rounded  px-3 py-6 mx-3 my-7')]}>
        <View
          style={[
            tailwind('bg-dark-2 border-b-2 mb-3 rounded p-1'),
            {borderBottomColor: '#B2933D'},
          ]}>
          <TextInput
            value={ref}
            onChangeText={e => setRef(e)}
            placeholder="Enter or Invite Code"
            placeholderTextColor="#8797B1"
            style={[tailwind('font-bold text-light p-2')]}
          />
        </View>

        <View
          style={[
            tailwind('bg-dark-2 border-b-2 mb-3 rounded p-1'),
            {borderBottomColor: '#B2933D'},
          ]}>
          <TextInput
            value={mobile}
            onChangeText={e => setMobile(e)}
            placeholder="Mobile Number"
            placeholderTextColor="#8797B1"
            style={[tailwind('font-bold text-light p-2')]}
          />
        </View>

        <Text style={[tailwind('font-regular text-dark-1 font-12 py-1')]}>
          You will Receive an OTP for Verification
        </Text>

        <LinearGradient
          end={{x: 0.0, y: 0.5}}
          start={{x: 0.8, y: 2.0}}
          locations={[0.6, 0.5]}
          style={[tailwind('my-2 rounded p-2')]}
          colors={['#B2933D', '#C5A858']}>
          <TouchableOpacity
            onPress={navigate}
            style={[
              tailwind('flex-row  items-center justify-center  rounded p-1'),
            ]}>
            <Text style={[tailwind('font-bold text-brown-4 px-2 font-18')]}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text
          style={[
            tailwind('font-regular text-dark-1 pt-2 text-center font-12'),
          ]}>
          By Registering, I agree to KenFG's{' '}
          <Text style={[tailwind('text-green-500 underline')]}>T&Cs</Text>
        </Text>
      </View>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
