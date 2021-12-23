import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox, infoBox} from '../../utils/snakBars';
import {signupRemote} from '../../remote/authRemote';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import assets from '../../constants/assets_manifest';

import {
  TopBar,
  BlockScreenByLoading,
  ButtonComponent,
  SocialLogin,
} from '../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';
const log = console.log;

export default function SignupScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const [mobile, setMobile] = useState('9876543210');
  const [ref, setRef] = useState('');
  const [showHint, setShowHint] = useState(true);

  const [loading, setLoading] = useState(false);

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
            Welcome to KenFG!
          </Text>
          <Text
            style={[
              tailwind('font-regular text-dark-1 pt-1 text-center font-12'),
            ]}>
            Register to Continue
          </Text>
          {/* Invite code input */}
          <View style={[tailwind('pt-8 pb-4')]}>
            <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
              Enter Invite Code
            </Text>
            <TextInput
              maxLength={7}
              value={'98777'}
              style={[
                tailwind('border-b font-bold text-light font-20'),
                {borderColor: '#8797B14D', height: 40},
              ]}
            />
          </View>

          <View style={[tailwind('pt-1 pb-4')]}>
            <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
              Mobile No
            </Text>
            <TextInput
              maxLength={10}
              value={mobile}
              keyboardAppearance="dark"
              keyboardType="decimal-pad"
              onChangeText={e => setMobile(e)}
              style={[
                tailwind('border-b font-bold text-white font-20'),
                {borderColor: '#8797B14D', height: 40},
              ]}
            />
            <Text style={[tailwind('font-regular font-12 text-dark-1 pt-2')]}>
              You will receive OTP for Verification
            </Text>
          </View>

          <TouchableOpacity onPress={navigate}>
            <ButtonComponent text={'REGISTER'} />
          </TouchableOpacity>
          <OR />
          <SocialLogin />
          <TC />
        </ScrollView>
      </ScrollView>
      {showHint && <FooterHint screen="LoginScreen" />}

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

const FooterHint = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('p-4 flex-row items-center justify-center')]}>
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Already a user ?{' '}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={[tailwind('font-bold text-white underline font-15')]}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const TC = () => {
  return (
    <View style={[tailwind('flex-row justify-center items-center pt-5')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        By registering you agree to the
      </Text>
      <Text style={[tailwind('font-bold px-1 underline text-white font-12')]}>T&C</Text>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        {' '}
        of KenFG
      </Text>
    </View>
  );
};
