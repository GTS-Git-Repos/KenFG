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
import clr from '../../../../constants/colors';

interface PropTypes {
  countDown: string;
  dT: boolean;
}

export default function TopBarCreateTeam(props: PropTypes) {
  const dT = props.dT;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function goBack() {
    dispatch(clearTeamAction());
    navigation.goBack();
  }
  return (
    <View style={[dT ? clr.bgg : clr.bgRed]}>
      <View style={[ss.container]}>
        <View style={[ss.sec]}>
          <TouchableOpacity onPress={goBack} style={[tailwind('pl-4 px-2')]}>
            <BackIcon dark={dT} />
          </TouchableOpacity>
          <Text style={[ss.cd, dT ? clr.tg : clr.tw]}>
            {props.countDown} Left
          </Text>
        </View>
        <View style={[ss.sec]}>
          <Image
            resizeMode="contain"
            source={assets.fantasy_points}
            style={[ss.fpImage]}
          />
          <TouchableOpacity style={[ss.link]}>
            <InfoIcon isDarkMode={dT} />
          </TouchableOpacity>

          <TouchableOpacity style={[ss.link]}>
            <PointsIcon isDarkMode={dT} />
          </TouchableOpacity>
          <TouchableOpacity style={[ss.link]}>
            <HelpIcon isDarkMode={dT} />
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  sec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cd: {
    fontFamily: 'gadugi-bold',
    fontSize: 18,
  },
  fpImage: {
    width: 30,
    height: 30,
  },
});
