import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {ReferPeopleIcon} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function ReferPhoneContacts(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('rounded flex-row items-center justify-center'),
        {paddingVertical: 14, marginBottom: 16},
        props.dT ? clr.bgGreen : clr.bgLgreen,
      ]}>
      <ReferPeopleIcon />
      <Text
        style={[tailwind('font-regular font-14 px-3 uppercase text-white')]}>
        Refer PHONE CONTACTS
      </Text>
    </View>
  );
}
