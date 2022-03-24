import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  TopBar,
  BlockScreenByLoading,
  ButtonComponent,
} from '../../../sharedComponents';
import {useNavigation, useRoute} from '@react-navigation/native';
import {errorBox} from '../../../utils/snakBars';
import OTPInput from './molecules/OTPInput';
import {otpVerifyRemote} from '../../../remote/authRemote';
import {saveToken} from '../../../utils/authTokenUtils';
import {getUserRemote} from '../../../remote/userRemote';
import {resetDrawerNavigation} from '../../../utils/resetNav';
import {updateUserInfoAction} from '../../../store/actions/userAction';
import {useDispatch} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import {useSelector} from 'react-redux';

const log = console.log;

export default function OTPScreen() {
  const dT = useSelector(getAppThemeSelector);

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
        errorBox('Invalid OTP', 500);
      }, 500);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    log(route.params);
  }, []);

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'OTP'} />
      <View style={[ss.inputC, dT ? clr.bgd2 : clr.bgw]}>
        <View style={[{paddingVertical: 20}]}>
          <View>
            <Text style={[ss.title, dT ? clr.tw : clr.td1]}>
              Verification Code
            </Text>
            <Text style={[ss.subText, dT ? clr.tw : clr.td2]}>
              We have sent the verification code to your mobile number (
              {route?.params?.otp})
            </Text>

            {/* OTP Input */}
            <View style={[tailwind('py-10')]}>
              <OTPInput dT={dT} value={otp} onChangeText={setOTP} />
            </View>

            <TouchableOpacity onPress={onPressAction}>
              <ButtonComponent text={'SUBMIT'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {loading && <BlockScreenByLoading />}
    </View>
  );
}

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
    fontFamily: 'gadugi-bold',
    paddingTop: 24,
    textAlign: 'center',
    fontSize: 24,
  },
  subText: {
    fontFamily: 'gadugi-normal',
    paddingTop: 4,
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: 16,
  },
  iC: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  label: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
  },
  input: {
    fontFamily: 'gadugi-bold',
    fontSize: 20,
    borderColor: '#8797B14D',
    borderBottomWidth: 1,
    padding: 0,
    margin: 0,
    paddingVertical: 5,
  },
  hint: {
    fontFamily: 'gadugi-normal',
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
    fontFamily: 'gadugi-normal',
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
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    fontSize: 12,
    paddingHorizontal: 8,
  },
  link: {
    fontFamily: 'gadugi-normal',
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
    fontFamily: 'gadugi-bold',
    textDecorationLine: 'underline',
  },
  footLink2: {
    fontFamily: 'gadugi-bold',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});
