import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

export default function CreateTeamButtom(props: any) {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const navigateByButton = () => {
    navigation.navigate('TeamFormationScreen', {
      mutation: false,
    });
  };

  return (
    <View
      style={[
        tailwind(
          'absolute bottom-0 w-full flex-row items-center justify-center',
        ),
      ]}>
      <View
        style={[
          tailwind('w-6/12 flex-row m-2 rounded'),
          {backgroundColor: '#00513B'},
        ]}>
        <TouchableOpacity
          onPress={navigateByButton}
          style={[
            tailwind('py-3 flex-grow flex-row items-center justify-center'),
          ]}>
          <Image
            resizeMode="contain"
            source={assets.plus}
            style={[tailwind(''), {width: 20, height: 20}]}
          />
          <Text
            style={[
              tailwind(
                'font-bold px-2 uppercase text-center text-light font-12',
              ),
            ]}>
            Create Team
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
