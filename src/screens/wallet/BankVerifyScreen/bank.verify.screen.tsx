import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  ButtonComponent,
  TopBar,
  BlockScreenByLoading,
} from '../../../sharedComponents';

interface PropTypes {
  acno: any;
  setAcno(e: any): any;
  reacno: any;
  setReacno(e: any): any;
  ifsc: any;
  setIfsc(e: any): any;
  name: any;
  setName(e: any): any;
  branch: any;
  setBranch(e: any): any;
  state: any;
  setState(e: any): any;
  image: any;
  error: any;
  validateInputs(): any;
  removeImage(): any;
  openLibrary(): any;
}

const TEXTCOLOR = '#8797B1';

export default function PanVerifyScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgGray]}>
      <TopBar text={'Verify Bank Account'} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={[tailwind('p-3')]}>
          <View style={[ss.inputContainer]}>
            {/* Account Number */}
            <InputTitle dT={dT} text="Account Number" />
            <TextInput
              style={[ss.textInput, !dT && ss.lRoot, !dT && clr.bgw]}
              value={props.acno}
              maxLength={18}
              keyboardType="decimal-pad"
              onChangeText={(e: any) => props.setAcno(e)}
            />
            {props.error.target === 'acno' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>
          {/* Retype account number */}
          <View style={[ss.inputContainer]}>
            <InputTitle text="Retype Account Number" />
            <TextInput
              style={[ss.textInput, !dT && ss.lRoot, !dT && clr.bgw]}
              value={props.reacno}
              maxLength={18}
              keyboardType="decimal-pad"
              onChangeText={(e: any) => props.setReacno(e)}
            />
            {props.error.target === 'reacno' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>
          {/* IFSC */}
          <View style={[ss.inputContainer]}>
            <InputTitle text="IFSC Code" />
            <TextInput
              style={[ss.textInput, !dT && ss.lRoot, !dT && clr.bgw]}
              value={props.ifsc}
              maxLength={11}
              onChangeText={(e: any) => props.setIfsc(e)}
            />
            {props.error.target === 'ifsc' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          <View style={[ss.inputContainer]}>
            <InputTitle text="Bank Name" />
            <TextInput
              style={[ss.textInput, !dT && ss.lRoot, !dT && clr.bgw]}
              value={props.name}
              maxLength={25}
              onChangeText={(e: any) => props.setName(e)}
            />
            {props.error.target === 'name' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          <View style={[ss.inputContainer]}>
            <InputTitle text="Branch Name" />
            <TextInput
              style={[ss.textInput, !dT && ss.lRoot, !dT && clr.bgw]}
              value={props.branch}
              maxLength={25}
              onChangeText={(e: any) => props.setBranch(e)}
            />
            {props.error.target === 'branch' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          <View style={[ss.inputContainer]}>
            <InputTitle text="State" />
            <TextInput
              style={[ss.textInput, !dT && ss.lRoot, !dT && clr.bgw]}
              value={props.state}
              maxLength={25}
              onChangeText={(e: any) => props.setState(e)}
            />
            {props.error.target === 'state' && (
              <ErrorInput msg={props.error.msg} />
            )}
          </View>

          {/* Image  */}
          {props.image ? (
            <ImageUploaded
              dT={dT}
              openLibrary={props.openLibrary}
              removeImage={props.removeImage}
            />
          ) : (
            <ImageUpload dT={dT} openLibrary={props.openLibrary} />
          )}
          {props.error.target === 'image' && (
            <ErrorInput msg={props.error.msg} />
          )}

          <Instruction dT={dT} />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={props.validateInputs}
        style={[tailwind('m-3')]}>
        <ButtonComponent text={'Submit Details'} />
      </TouchableOpacity>
      {/* {props..isLoading && <BlockScreenByLoading />} */}
    </View>
  );
}

function InputTitle(props: any) {
  return (
    <Text
      style={[
        tailwind('font-regular text-red-500 px-0.5 font-15'),
        {color: TEXTCOLOR},
      ]}>
      {props.text}
    </Text>
  );
}

function ErrorInput(props: any) {
  return (
    <Text style={[tailwind('font-regular text-red-600 p-0.5 font-15')]}>
      {props.msg}
    </Text>
  );
}

function Instruction(props: any) {
  return (
    <View style={[ss.inputContainer]}>
      <Text
        style={[
          tailwind('font-bold uppercase font-13'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        Important
      </Text>
      <View style={[tailwind('flex-row items-center pt-3')]}>
        <Icon name="ellipse" size={8} color="gray" />
        <Text
          style={[
            tailwind('font-regular mx-1 px-0.5 font-12'),
            props.dT ? clr.td2 : clr.td1,
          ]}>
          Review your details before submitting your documents permanently
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center pt-3')]}>
        <Icon name="ellipse" size={8} color="gray" />
        <Text
          style={[
            tailwind('font-regular mx-1 text-red-500 px-0.5 font-12'),
            props.dT ? clr.td2 : clr.td1,
          ]}>
          Password protected files will be rejected
        </Text>
      </View>
    </View>
  );
}
function ImageUpload(props: any) {
  return (
    <TouchableOpacity
      onPress={props.openLibrary}
      style={[ss.imageIContainer, !props.dT && ss.lRoot, !props.dT && clr.bgw]}>
      <Icon name="image" size={20} color={props.dT ? 'lightgray' : 'gray'} />
      <Text
        style={[
          tailwind('font-regular mx-2 font-13'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        UPLOAD BANK PROOF
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
        props.dT ? clr.bgd2 : clr.bgw,
        !props.dT && ss.lRoot,
      ]}>
      <TouchableOpacity
        onPress={props.openLibrary}
        style={[tailwind('flex-row items-center')]}>
        <Icon name="link" size={20} color={props.dT ? 'lightgray' : 'gray'} />
        <Text
          style={[
            tailwind('font-regular mx-2 font-13'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          IMAGE SELECTED
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.removeImage}
        style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind('font-regular font-10 uppercase'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          Clear
        </Text>
        <Icon name="close" size={15} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  inputContainer: {
    padding: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  textInput: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderRadius: 4,
    borderWidth: 1,
    padding: 6,
    marginTop: 8,
    color: '#FFFFFF',
  },
  lRoot: {
    borderColor: 'rgba(31, 41, 55,0.1)',
  },
  imageIContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(31, 41, 55,1)',
    borderRadius: 2,
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
