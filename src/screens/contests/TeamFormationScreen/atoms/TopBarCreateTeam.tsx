import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {clearTeamAction} from '../../../../store/actions/teamActions';
import {
  HelpIcon,
  BackIcon,
  InfoIcon,
  PointsIcon,
} from '../../../../assets/newIcons';

interface PropTypes {
  countDown: string;
}

export default function TopBarCreateTeam(props: PropTypes) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function goBack() {
    dispatch(clearTeamAction());
    navigation.goBack();
  }
  return (
    <View style={[tailwind('bg-secondary')]}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-2'),
          {paddingVertical: 14},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack} style={[tailwind('pl-4 px-2')]}>
            <BackIcon dark={true} />
          </TouchableOpacity>
          <Text style={[tailwind('font-bold font-18'), {color: '#614920'}]}>
            {props.countDown} Left
          </Text>
        </View>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.fantasy_points}
            style={[tailwind(''), {width: 30, height: 30}]}
          />
          <TouchableOpacity style={[ss.link]}>
            <InfoIcon isDarkMode={true} />
          </TouchableOpacity>

          <TouchableOpacity style={[ss.link]}>
            <PointsIcon isDarkMode={true} />
          </TouchableOpacity>
          <TouchableOpacity style={[ss.link]}>
            <HelpIcon isDarkMode={true} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  link: {
    paddingHorizontal: 4,
  },
});
