import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

interface PropTypes {
  clearRef: any;
  clearTeam(): any;
}

export default function ClearTeamSheet(props: PropTypes) {
  const dispatch = useDispatch();

  return (
    <View style={[tailwind('bg-dark-4 px-3 py-5')]}>
      <Text style={[tailwind('font-bold pb-4 text-light text-center font-16')]}>
        Clear Team ?
      </Text>
      <Text
        style={[
          tailwind('font-regular pb-2 text-light text-center mx-10 font-12'),
        ]}>
        Are you sure you want to clear your player selections ?
      </Text>

      <TouchableOpacity
        onPress={props.clearTeam}
        style={[tailwind('flex-grow bg-green m-2 rounded py-3')]}>
        <Text
          style={[
            tailwind(
              'font-bold uppercase text-light flex-grow text-center font-12',
            ),
          ]}>
          Yes Clear
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.clearRef?.current?.close()}
        style={[
          tailwind(
            'flex-grow py-3 m-2 rounded bg-dark-3 border border-gray-800',
          ),
        ]}>
        <Text
          style={[
            tailwind('font-bold uppercase text-light text-center font-12'),
          ]}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}
