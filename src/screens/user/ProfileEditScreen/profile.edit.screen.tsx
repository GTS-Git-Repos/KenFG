import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import InputTitle from './atoms/InputTitle';
import InputBox from './molecules/InputBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GenderSelection from './molecules/GenderSelection';
import LogOut from './atoms/Logout';
import {format, parseISO} from 'date-fns';
import ErrorHint from './atoms/ErrorHint';
import PrivacySettings from './atoms/PrivacySettings';
import {useForm, Controller} from 'react-hook-form';
import Dob from './molecules/Dob';
import {ButtonComponent, BlockScreenByLoading} from '../../../sharedComponents';
import {getUserRemote, updateUserRemote} from '../../../remote/userRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {useDispatch, useSelector} from 'react-redux';
import {decodeJwt} from '../../../utils/comman';
import {updateUserInfoAction} from '../../../store/actions/userAction';
import AllowSMS from './atoms/AllowSMS';
import ThemeSwitch from './molecules/theme.switch';
import NumberInput from './molecules/NumberInput';

const log = console.log;

interface PropTypes {
  darkModeState: any;
  onColorThemePress(): void;
}

export default function ProfileEditScreen(props: PropTypes) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [bday, setBday] = useState(new Date());
  const [isMale, setIsMale] = useState<any>(null);
  const [openDate, setOpenDate] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  useEffect((): any => {
    try {
      const formatedDate = parseISO(userInfoState.dob);
      if (formatedDate) {
        setBday(formatedDate);
      }
      if (userInfoState.gender === '1') {
        setIsMale(true);
      } else if (userInfoState.gender === '0') {
        setIsMale(false);
      }
    } catch (err) {
      return false;
    }
  }, []);

  const {
    control,
    handleSubmit,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      ...userInfoState,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      if (!bday) {
        throw 'Invalid Birth day';
      }
      if (isMale === null) {
        throw 'Please select your gender';
      }
      setLoading(true);
      const updateresponse = await updateUserRemote({
        ...data,
        allow_sms: 1,
        make_me_visible: 0,
        dob: format(bday, 'dd-MM-yyyy'),
        gender: isMale ? 1 : 0,
      });
      if (!updateresponse) {
        throw 'Failed to Update user !';
      }
      const userResponse = await getUserRemote({mobile: userInfoState.mobile});
      if (!userResponse) {
        throw 'Failed to get Updated user Information';
      }
      // console.log(userResponse)
      dispatch(updateUserInfoAction(userResponse.data));
      infoBox('User information is updated', 2000);
      setTimeout(() => {
        setLoading(false);
        navigation.goBack();
      }, 500);
    } catch (err: any) {
      console.log(err);
      errorBox('Failed to update user', 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tailwind('h-full bg-dark-3')}>
      <TopBar text={'My Info & Settings'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={tailwind('p-3')}>
        <InputTitle text={'Name'} />

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="name"
        />

        {errors.name && (
          <ErrorHint text="Name is required and length should be 4 to 50" />
        )}

        <InputTitle text={'Email'} />

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="email"
        />

        {errors.email && <ErrorHint text="valid Email is required" />}
        {/* 
        <InputTitle text={'Password'} />

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 7,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="password"
        />
        {errors.password && (
          <ErrorHint text="Password is required and length should be 4 to 50" />
        )} */}

        <ThemeSwitch darkModeState={props.darkModeState} onColorThemePress={props.onColorThemePress} />

        <InputTitle text={'Date of Birth'} />
        <Dob
          openDate={openDate}
          setOpenDate={setOpenDate}
          bday={bday}
          setBday={setBday}
        />

        <InputTitle text={'Gender'} />
        <GenderSelection isMale={isMale} setIsMale={setIsMale} />

        {/* <PrivacySettings /> */}

        {/* <AllowSMS />  */}

        <InputTitle text={'Address'} />
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="address"
        />
        {errors.address && (
          <ErrorHint text="Address is required and length should be 4 to 50" />
        )}

        <InputTitle text={'City'} />
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="city"
        />
        {errors.city && (
          <ErrorHint text="City is required and length should be 4 to 50" />
        )}

        <InputTitle text={'Pin Code'} />
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <NumberInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name="pincode"
        />
        {errors.pincode && (
          <ErrorHint text="Pincode is required and length should be 4 to 50" />
        )}

        <InputTitle text={'State'} />
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="state"
        />
        {errors.state && (
          <ErrorHint text="State is required and length should be 4 to 50" />
        )}

        <InputTitle text={'Country'} />
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
            maxLength: 50,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="country"
        />
        {errors.country && (
          <ErrorHint text="Country is required and length should be 4 to 50" />
        )}

        {/* <LogOut /> */}

        <TouchableOpacity
          style={[tailwind('my-6')]}
          onPress={handleSubmit(onSubmit)}>
          <ButtonComponent text={'Update Profile'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
