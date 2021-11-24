import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {errorBox} from '../../utils/snakBars';
import {useQuery} from 'react-query';
import {TopBar} from '../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';
const log = console.log;

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const [number, setNumber] = useState('');

  const navigate = () => {
    if (number.length > 1) {
      navigation.navigate('OTPScreen');
    } else {
      errorBox('Invalid Mobile number');
    }
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Log in'} />
      <View
        elevation={5}
        style={[tailwind('bg-dark-3 rounded  px-3 py-6 mx-3 my-7')]}>
        <View
          style={[
            tailwind('bg-dark-2 border-b-2 mb-3 rounded p-1'),
            {borderBottomColor: '#B2933D'},
          ]}>
          <TextInput
            maxLength={10}
            value={number}
            keyboardAppearance="dark"
            keyboardType="decimal-pad"
            onChangeText={e => setNumber(e)}
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
            onPress={navigate}
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
    </View>
  );
}
