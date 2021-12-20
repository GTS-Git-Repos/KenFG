import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EditIcon from '../icons/EditIcon';
import {CopyIcon} from '../../sharedComponents/';

interface PropTypes {
  teams_key: string;
  canModify: boolean;
}

export default function MyTeamsTopSection(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          `flex-row items-center ${
            props.canModify ? 'justify-between' : 'justify-center'
          }`,
        ),
        {backgroundColor: 'rgba(0,0,0,0.3)'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind('font-bold py-3 px-2 uppercase text-light font-14'),
          ]}>
          {props.teams_key || 'T1'}
        </Text>
        <Text style={[tailwind('font-regular text-light font-14')]}>
          (Current)
        </Text>
      </View>
      {props.canModify && (
        <View style={[tailwind('flex-row items-center px-2')]}>
          <TouchableOpacity onPress={() => {}} style={[tailwind('px-2')]}>
            {/* <CopyIcon /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <EditIcon />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
