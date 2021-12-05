import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox} from '../../utils/snakBars';
import {TopBar, BlockScreenByLoading} from '../../sharedComponents';

import {useMutation} from 'react-query';
import LinearGradient from 'react-native-linear-gradient';
import {loginRemote} from '../../remote/authRemote';
const log = console.log;

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  const [mobile, setMobile] = useState('9867543210');
  const [loading, setLoading] = useState(false);

  const onPressAction = async () => {
    try {
      setLoading(true);
      if (mobile.length === 10) {
        const response = await loginRemote({mobile});
        if (response) {
          // log(response);
          navigation.navigate('OTPScreen', {
            mobile,
            otp: response.otp,
          });
        }
      } else {
        errorBox('Invalid Mobile Number');
      }
    } catch (err) {
      errorBox("Can't Proceed ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Log in'} />
      <View style={[tailwind('bg-dark-3 rounded  px-3 py-6 mx-3 my-7 shadow')]}>
        <View
          style={[
            tailwind('bg-dark-2 border-b-2 mb-3 rounded p-1'),
            {borderBottomColor: '#B2933D'},
          ]}>
          <TextInput
            maxLength={10}
            value={mobile}
            keyboardAppearance="dark"
            keyboardType="decimal-pad"
            onChangeText={e => setMobile(e)}
            placeholder="Mobile Number"
            placeholderTextColor="#8797B1"
            style={[tailwind('font-bold text-light p-2')]}
          />
        </View>
        <LinearGradient
          end={{x: 0.0, y: 0.5}}
          start={{x: 0.8, y: 2.0}}
          locations={[0.6, 0.5]}
          style={[tailwind('my-2 rounded p-2')]}
          colors={['#B2933D', '#C5A858']}>
          <TouchableOpacity
            onPress={onPressAction}
            style={[
              tailwind('rounded p-1 flex-row  items-center justify-center '),
            ]}>
            <Text style={[tailwind('font-bold text-brown-4 px-2 font-18')]}>
              NEXT
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <Text style={[tailwind('font-regular text-dark-1 text-center font-15')]}>
        Not a Memeber ?{' '}
        <Text style={[tailwind('text-green-500 underline')]}>Register</Text>
      </Text>
      {loading && <BlockScreenByLoading />}
    </View>
  );
}
