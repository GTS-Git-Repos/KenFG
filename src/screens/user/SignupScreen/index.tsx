import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../utils/snakBars';
import {signupRemote} from '../../../remote/authRemote';
import assets from '../../../constants/assets_manifest';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import {
  BlockScreenByLoading,
  ButtonComponent,
  SocialLogin,
} from '../../../sharedComponents';
const log = console.log;

export default function SignupScreen() {
  const dT = useSelector(getAppThemeSelector);

  const navigation = useNavigation<any>();

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const [mobile, setMobile] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const [ref, setRef] = useState('');
  const [showHint, setShowHint] = useState(true);
  const [showInvite, setShowInvite] = useState(false);

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

  const openInviteInput = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowInvite(true);
  };

  const navigate = async () => {
    try {
      const mobileNumber = mobile.replace(/ /g, '');
      log(mobileNumber.length);
      if (mobileNumber.length !== 10) {
        throw new Error('Invalid Mobile Number');
      }
      setLoading(true);
      const response = await signupRemote({
        mobile,
        ref,
      });
      if (!response) {
        throw new Error('Please check your internet');
      }
      navigation.navigate('OTPScreen', {
        mobile,
        otp: response.otp,
      });
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

        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Welcome to KenFG!</Text>
        <Text style={[ss.subText, dT ? clr.tw : clr.td2]}>
          Register to Continue
        </Text>

        <View style={[ss.iC]}>
          <Text style={[ss.label, dT ? clr.tgray : clr.td1]}>Mobile No</Text>
          <TextInput
            maxLength={10}
            value={mobile}
            keyboardAppearance="dark"
            keyboardType="decimal-pad"
            onChangeText={e => setMobile(e)}
            style={[ss.input, dT ? clr.tw : clr.td1]}
          />
          <Text style={[ss.hint, dT ? clr.tgray : clr.td2]}>
            You will receive OTP for Verification
          </Text>
        </View>
        {showInvite && (
          <View style={[ss.inviteC]}>
            <Text style={[ss.label, dT ? clr.tw : clr.td1]}>
              Enter Invite Code
            </Text>
            <TextInput
              maxLength={7}
              value={inviteCode}
              onChangeText={e => setInviteCode(e)}
              style={[ss.input, ss.input, dT ? clr.tw : clr.td1]}
            />
          </View>
        )}

        <TouchableOpacity onPress={navigate}>
          <ButtonComponent text={'REGISTER'} />
        </TouchableOpacity>
        <View style={[ss.orC]}>
          <View style={[ss.line]}></View>
          <Text style={[ss.ortxt]}>OR</Text>
          <View style={[ss.line]}></View>
        </View>
        <SocialLogin dT={dT} />
        <View style={[ss.tcC]}>
          <Text style={[ss.tcTxt]}>By registering you agree to the</Text>
          <Text style={[ss.link, dT ? clr.tw : clr.td1]}>T&C</Text>
          <Text style={[ss.tcTxt]}> of KenFG</Text>
        </View>
      </ScrollView>

      {showHint && <FooterHint dT={dT} openInviteInput={openInviteInput} />}

      {loading && <BlockScreenByLoading />}
    </View>
  );
}

const FooterHint = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <View style={[ss.footC]}>
      <View>
        <Text style={[ss.tcTxt]}>Have a referral Code ? </Text>
        <TouchableOpacity onPress={props.openInviteInput}>
          <Text style={[ss.footLink, props.dT ? clr.tw : clr.td2]}>
            Enter Code
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[ss.tcTxt]}>Already a user ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[ss.footLink2, props.dT ? clr.tw : clr.td2]}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
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
