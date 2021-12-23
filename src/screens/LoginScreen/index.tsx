import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox} from '../../utils/snakBars';
import {
  TopBar,
  BlockScreenByLoading,
  ButtonComponent,
  SocialLogin,
  Facebook,
} from '../../sharedComponents';
import assets from '../../constants/assets_manifest';
import {useMutation} from 'react-query';
import LinearGradient from 'react-native-linear-gradient';
import {loginRemote} from '../../remote/authRemote';
const log = console.log;

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  const [mobile, setMobile] = useState('9867543210');
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => {
      setShowHint(false);
    });
    const close = Keyboard.addListener('keyboardDidHide', () => {
      setShowHint(true);
    });
    return () => {
      show.remove();
      close.remove();
    };
  }, []);

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
      <ScrollView
        contentContainerStyle={[
          tailwind('py-9 bg-dark-3'),
          {paddingHorizontal: 26},
        ]}>
        <ScrollView>
          <View style={[tailwind('flex-row items-center justify-center')]}>
            <Image
              resizeMode="contain"
              source={assets.logo_new}
              style={[tailwind(''), {width: 92, height: 28}]}
            />
          </View>

          <Text
            style={[
              tailwind('font-bold text-light pt-9 text-center'),
              {fontSize: 24},
            ]}>
            Welcome Back
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 pt-1 text-center')]}>
            Sign in to Continue
          </Text>

          <View style={[tailwind('pt-8 pb-4')]}>
            <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
              Enter Mobile Number
            </Text>
            <TextInput
              maxLength={13}
              value={'9876543210'}
              keyboardAppearance="dark"
              keyboardType="decimal-pad"
              style={[
                tailwind('border-b font-bold text-white font-20'),
                {borderColor: '#8797B14D', height: 40},
              ]}
            />
          </View>

          <TouchableOpacity onPress={onPressAction}>
            <ButtonComponent text={'NEXT'} />
          </TouchableOpacity>
          <OR />
          <SocialLogin />
        </ScrollView>
      </ScrollView>
      {showHint && <FooterHint />}

      {loading && <BlockScreenByLoading />}
    </View>
  );
}

const OR = () => {
  return (
    <View style={[tailwind('flex-row items-center my-4')]}>
      <View
        style={[
          tailwind(''),
          {flex: 5, backgroundColor: '#8797B11A', height: 1},
        ]}></View>
      <Text
        style={[
          tailwind('font-regular text-center font-12 text-dark-1'),
          {flex: 1.5},
        ]}>
        OR
      </Text>
      <View
        style={[
          tailwind(''),
          {flex: 5, backgroundColor: '#8797B11A', height: 1},
        ]}></View>
    </View>
  );
};

const FooterHint = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('p-4 flex-row items-center justify-center')]}>
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Dont't have an account ?{' '}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={[tailwind('font-bold text-white underline font-15')]}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};
