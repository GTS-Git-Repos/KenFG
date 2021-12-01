import React, {useEffect, useState} from 'react';
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
import {format} from 'date-fns';
import ErrorHint from './atoms/ErrorHint';
import {useForm, Controller} from 'react-hook-form';
import Dob from './molecules/Dob';
import {ButtonComponent, BlockScreenByLoading} from '../../sharedComponents/';
import {updateUserRemote} from '../../remote/userRemote';
import {errorBox, infoBox} from '../../utils/snakBars';

const log = console.log;

export default function ProfileEditScreen() {
  const navigation = useNavigation();

  const [bday, setBday] = useState(new Date());
  const [isMale, setIsMale] = useState<any>(null);
  const [openDate, setOpenDate] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);

  const {
    control,
    handleSubmit,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: 'name',
      email: 'name@name.com',
      password: 'password',
      mobile_number: '9876543210',
      address: 'Address',
      city: 'City',
      pincode: '622222',
      state: 'Tamil Nadu',
      country: 'India',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      if (bday) {
        if (isMale) {
          setLoading(true);
          const response = await updateUserRemote({
            ...data,
            allow_sms: 1,
            make_me_visible: 0,
            dob: format(bday, 'dd-MM-yyyy'),
            gender: isMale ? 1 : 0,
          });
          if (response) {
            infoBox('User information is updated');
            setTimeout(() => {
              navigation.goBack();
            }, 1000);
          } else {
            errorBox('Failed to update User');
          }
          console.log(response);
        } else {
          errorBox('Please select your gender');
        }
      } else {
        errorBox('invalid Birthday');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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
        <Dob
          openDate={openDate}
          setOpenDate={setOpenDate}
          bday={bday}
          setBday={setBday}
        />

        <InputTitle text={'Gender'} />
        <GenderSelection isMale={isMale} setIsMale={setIsMale} />

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

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
