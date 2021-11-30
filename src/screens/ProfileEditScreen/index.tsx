import React, {useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
import InputTitle from './atoms/InputTitle';
import InputBox from './molecules/InputBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GenderSelection from './molecules/GenderSelection';
import LogOut from './atoms/Logout';
import ErrorHint from './atoms/ErrorHint';
import {useForm, Controller} from 'react-hook-form';
import {ButtonComponent} from '../../sharedComponents/';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function ProfileEditScreen() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      dob: '',
      mobile_number: '',
      address: '',
      city: '',
      pincode: '',
      state: '',
      country: '',
    },
  });

  useEffect(() => {
    console.log('formState');
    // setFocus('name');
  }, [setFocus]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'My Info'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={tailwind('px-3 py-3')}>
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
        )}

        <InputTitle text={'Date of Birth'} />
        {/* <InputBox /> */}
        <InputTitle text={'Gender'} />
        <GenderSelection />

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
            <InputBox value={value} onChangeText={onChange} onBlur={onBlur} />
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

        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <ButtonComponent text={'Update User'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
