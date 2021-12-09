import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

interface PropTypes {
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

      <LinearGradient
        start={{x: 0.8, y: 2.0}}
        end={{x: 0.3, y: 0.5}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row  m-2 rounded')]}
        colors={['#00513B', '#006A4D']}>
        <TouchableOpacity
          onPress={props.clearTeam}
          style={[tailwind('flex-grow py-3')]}>
          <Text
            style={[
              tailwind(
                'font-bold uppercase text-light flex-grow text-center font-12',
              ),
            ]}>
            Yes Clear
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        start={{x: 0.8, y: 2.0}}
        end={{x: 0.3, y: 0.5}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row  m-2 rounded')]}
        colors={['#1C2B46', '#172338']}>
        <TouchableOpacity style={[tailwind('flex-grow py-3')]}>
          <Text
            style={[
              tailwind('font-bold uppercase text-light text-center font-12'),
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
