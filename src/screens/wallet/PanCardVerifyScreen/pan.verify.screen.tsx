import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tailwind from '../../../../tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/Ionicons';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import {useSelector} from 'react-redux';

import {
  ButtonComponent,
  TopBar,
  BlockScreenByLoading,
} from '../../../sharedComponents';
import {userInfo} from '../../../store/selectors';
import {format, isEqual} from 'date-fns';

const log = console.log;

interface PropTypes {
  name: any;
  setName(e: any): any;
  pan: any;
  setPan(e: any): any;
  dob: any;
  setDob(e: any): any;
  image: any;
  validateInputs(): any;
  error: any;
  openDate: any;
  loading: boolean;
  setOpenDate(e: boolean): any;
  onDateChangedAction(e: any): any;
  removeImage(): any;
  openLibrary(): any;
}

const TEXTCOLOR = '#8797B1';

export default function PanVerifyScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd2 : clr.bgGray]}>
      <TopBar text={'Verify PAN card'} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={[tailwind('p-3')]}>
          {/* name input */}
          <View style={[ss.inputContainer]}>
            <InputTitle text="Name" dT={dT} />
            <TextInput
              style={[
                ss.textInput,
                dT ? ss.dborder : ss.lborder,
                dT ? clr.tw : clr.td1,
              ]}
              value={props.name}
              onChangeText={(e: any) => props.setName(e)}
            />
            {props.error.target === 'name' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          <View style={[ss.inputContainer]}>
            <InputTitle text="Pan card number" dT={dT} />
            <TextInput
              style={[
                ss.textInput,
                dT ? ss.dborder : ss.lborder,
                dT ? clr.tw : clr.td1,
              ]}
              value={props.pan}
              onChangeText={(e: any) => props.setPan(e)}
            />
            {props.error.target === 'pan' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          <View style={[ss.inputContainer]}>
            <InputTitle text="Date of Birth" dT={dT} />
            <TouchableOpacity
              onPress={() => props.setOpenDate(true)}
              style={[ss.textInput, dT ? ss.dborder : ss.lborder]}>
              <Text style={[ss.dobText, dT ? clr.tw : clr.td1]}>
                {props.dob && format(props.dob, 'dd-MM-yyyy')}
              </Text>
            </TouchableOpacity>
            {props.error.target === 'dob' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          {/* Image  */}
          {props.image ? (
            <ImageUploaded
              openLibrary={props.openLibrary}
              removeImage={props.removeImage}
              dT={dT}
            />
          ) : (
            <ImageUpload openLibrary={props.openLibrary} dT={dT} />
          )}
          {props.error.target === 'image' && (
            <ErrorInput msg={props.error.msg} />
          )}
          <Instruction />
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.validateInputs}
        style={[tailwind('m-3')]}>
        <ButtonComponent text={'Submit Details'} />
      </TouchableOpacity>
      {/* {props.initiatePayment.isLoading && <BlockScreenByLoading />}
      {props.updateWallet.isLoading && <BlockScreenByLoading />} */}
      {props.openDate && (
        <DateTimePicker
          value={props.dob ? props.dob : new Date()}
          mode={'date'}
          maximumDate={new Date()}
          display="default"
          onChange={props.onDateChangedAction}
        />
      )}

      {/* loading while form submitting  */}
      {props.loading && <BlockScreenByLoading />}
    </View>
  );
}

function ImageUpload(props: any) {
  return (
    <TouchableOpacity
      onPress={props.openLibrary}
      style={[ss.imageIContainer, props.dT ? ss.dborder : ss.lborder]}>
      <Icon name="image" size={20} color={props.dT ? 'lightgray' : '#9C181E'} />
      <Text
        style={[
          tailwind('font-regular mx-2 font-13'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        Upload PAN Card Image
      </Text>
    </TouchableOpacity>
  );
}
function ImageUploaded(props: any) {
  return (
    <View
      style={[
        tailwind('justify-between'),
        ss.imageIContainer,
        props.dT ? ss.dborder : ss.lborder,
      ]}>
      <TouchableOpacity
        onPress={props.openLibrary}
        style={[tailwind('flex-row items-center')]}>
        <Icon
          name="link"
          size={20}
          color={props.dT ? 'lightgray' : '#9C181E'}
        />
        <Text
          style={[
            tailwind('font-regular mx-2 font-13'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          Image selected
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.removeImage}
        style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind('font-regular font-11 uppercase'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          Clear
        </Text>
        <Icon name="close" size={15} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

function ErrorInput(props: any) {
  return (
    <Text style={[tailwind('font-regular text-red-600 p-0.5 font-15')]}>
      * {props.msg}
    </Text>
  );
}

function InputTitle(props: any) {
  return (
    <Text
      style={[
        tailwind('font-regular px-0.5 font-15'),
        props.dT ? clr.td2 : clr.td1,
      ]}>
      {props.text}
    </Text>
  );
}

function Instruction(props: any) {
  return (
    <View style={[ss.inputContainer]}>
      <Text style={[tailwind('font-bold uppercase text-white font-13')]}>
        Important
      </Text>
      <View style={[tailwind('flex-row items-center pt-3')]}>
        <Icon name="ellipse" size={8} color="gray" />
        <Text
          style={[
            tailwind('font-regular mx-1 text-red-500 px-0.5 font-12'),
            {color: TEXTCOLOR},
          ]}>
          Full name on PAN Card and bank account must match
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center pt-3')]}>
        <Icon name="ellipse" size={8} color="gray" />
        <Text
          style={[
            tailwind('font-regular mx-1 text-red-500 px-0.5 font-12'),
            {color: TEXTCOLOR},
          ]}>
          It takes max 1 working day to get PAN verified
        </Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {},
  inputContainer: {
    padding: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 6,
    marginTop: 8,
  },
  dborder: {
    borderColor: 'rgba(255, 255, 255,0.2)',
  },
  lborder: {
    borderColor: '#9C181E',
  },
  imageIContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    margin: 4,
    color: '#FFFFFF',
  },
  dobText: {
    paddingVertical: 4,
    color: '#FFFFFF',
  },
});
