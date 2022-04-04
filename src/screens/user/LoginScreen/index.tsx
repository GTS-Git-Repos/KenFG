import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../utils/snakBars';
import {
  BlockScreenByLoading,
  ButtonComponent,
  SocialLogin,
} from '../../../sharedComponents';
import assets from '../../../constants/assets_manifest';
import {loginRemote} from '../../../remote/authRemote';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import {useSelector} from 'react-redux';

const log = console.log;

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const dT = useSelector(getAppThemeSelector);

  const [mobile, setMobile] = useState('');
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
      const mobileNumber = mobile.replace(/ /g, '');
      if (mobileNumber.length !== 10) {
        throw new Error('Invalid Mobile Number');
      }
      setLoading(true);
      const response = await loginRemote({mobile});
      if (response) {
        // log(response);
        navigation.navigate('OTPScreen', {
          mobile,
          otp: response.otp,
        });
      } else {
        throw new Error('Internet failed');
      }
    } catch (err: any) {
      errorBox(`${err.message}`, 500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[ss.inputC, dT ? clr.bgd2 : clr.bgw]}>
        <View style={[ss.logoc]}>
          <Image
            resizeMode="contain"
            source={assets.logo_new}
            style={[ss.logo]}
          />
        </View>

        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Welcome Back</Text>
        <Text style={[ss.subText, dT ? clr.tw : clr.td2]}>
          Login to Continue
        </Text>

        <View style={[ss.iC]}>
          <Text style={[ss.label, dT ? clr.tgray : clr.td1]}>
            Enter Mobile No
          </Text>
          <TextInput
            maxLength={10}
            value={mobile}
            onChangeText={e => setMobile(e)}
            keyboardAppearance="dark"
            keyboardType="decimal-pad"
            style={[ss.input, dT ? clr.tgray : clr.td1]}
          />
        </View>

        <TouchableOpacity onPress={onPressAction}>
          <ButtonComponent text={'NEXT'} />
        </TouchableOpacity>
        <View style={[ss.orC]}>
          <View style={[ss.line]}></View>
          <Text style={[ss.ortxt]}>OR</Text>
          <View style={[ss.line]}></View>
        </View>
        <SocialLogin dT={dT} />
      </ScrollView>
      {showHint && <FooterHint dT={dT} />}

      {loading && <BlockScreenByLoading />}
    </View>
  );
}

const FooterHint = (props: any) => {
  const navigation = useNavigation<any>();

  return (
    <View style={[ss.footC]}>
      <Text style={[ss.tcTxt]}>Dont have an account ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={[ss.footLink, props.dT ? clr.tw : clr.td2]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  inputC: {
    paddingVertical: 24,
    paddingHorizontal: 26,
  },
  logoc: {
    alignItems: 'center',
  },
  logo: {
    width: 92,
    height: 28,
  },
  title: {
    fontFamily: 'Gadugi-Bold',
    paddingTop: 24,
    textAlign: 'center',
    fontSize: 24,
  },
  subText: {
    fontFamily: 'Gadugi-Normal',
    paddingTop: 4,
    textAlign: 'center',
    fontSize: 12,
  },
  iC: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  label: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
  },
  input: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 20,
    borderColor: '#8797B14D',
    borderBottomWidth: 1,
    padding: 0,
    margin: 0,
    paddingVertical: 5,
  },
  hint: {
    fontFamily: 'Gadugi-Normal',
    paddingTop: 8,
    fontSize: 12,
  },
  inviteC: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  orC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 5,
    height: 1,
    backgroundColor: '#8797B11A',
  },
  ortxt: {
    fontFamily: 'Gadugi-Normal',
    color: '#8797B1',
    textAlign: 'center',
    fontSize: 12,
    flex: 1.5,
  },
  tcC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  tcTxt: {
    fontFamily: 'Gadugi-Normal',
    color: '#8797B1',
    fontSize: 12,
    paddingHorizontal: 8,
  },
  link: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    paddingHorizontal: 4,
    textDecorationLine: 'underline',
  },
  footC: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footLink: {
    fontFamily: 'Gadugi-Bold',
    textDecorationLine: 'underline',
  },
  footLink2: {
    fontFamily: 'Gadugi-Bold',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});
