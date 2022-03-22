

import React from 'react';
import tailwind from '../../../tailwind';
import {View, TouchableOpacity, Text} from 'react-native';
import {PencilEditIcon} from '../../assets/newIcons/';
import CloneIcon from "../icons/CloneIcon"

interface PropTypes {
  team_key: string;
  canModify: boolean;
  current: boolean;
  mutateTeam(team_key: string, edit: boolean, clone: boolean): any;
}

export default function MyTeamsTopSection(props: PropTypes) {
// DEPRECATED NOT USED
return null

  return (
    <View
      style={[
        tailwind(
          `flex-row items-center px-2 ${
            props.canModify ? 'justify-between' : 'justify-center'
          }`,
        ),
        {backgroundColor: 'rgba(0,0,0,0.2)'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind('font-bold py-3 px-2 uppercase text-light font-14'),
          ]}>
          {props.team_key}
        </Text>
        {props.current && (
          <Text style={[tailwind('font-regular text-light font-14')]}>
            (Current)
          </Text>
        )}
      </View>
      {props.canModify && (
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity
            onPress={() => props.mutateTeam(props.team_key, false, true)}
            style={[tailwind('px-2')]}>
            <CloneIcon white={false} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[tailwind('px-1')]}
            onPress={() => props.mutateTeam(props.team_key, true, false)}>
            <PencilEditIcon background={false} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
