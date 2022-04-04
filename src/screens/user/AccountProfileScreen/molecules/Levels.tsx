import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {BottomLine} from '../../../../sharedComponents';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import clr from '../../../../constants/colors';

interface PropTypes {
  nextReward: string;
  dT: boolean;
}

export default function LevelCard(props: PropTypes) {
  const navigation = useNavigation<any>();
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgw]}>
      <View style={[tailwind('flex-row items-center pb-3')]}>
        <View style={[tailwind('rounded-full'), {width: 15, height: 15}]}>
          <Image
            resizeMode="contain"
            source={assets.levels}
            style={[tailwind('w-full h-full')]}
          />
        </View>
        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Next Rewards :</Text>
        <Text style={[ss.rAmount, dT ? clr.tg : clr.tr]}>
          {props.nextReward}
        </Text>
        <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Cash Bonus</Text>
      </View>
      {/* <View style={[tailwind('py-2')]}>
        <BottomLine />
      </View> */}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('UserGoalsScreen')}
        style={[ss.linkC]}>
        <Text style={[ss.lnkTxt, dT ? clr.tw : clr.td1]}>
          View Upcomming Rewards and Levels
        </Text>
        <Icon
          name="chevron-forward-outline"
          size={17}
          color={dT ? 'white' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderRadius: 4,
    marginVertical: 4,
    paddingTop: 12,
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: 'Gadugi-Bold',
    paddingHorizontal: 8,
    fontSize: 13,
  },
  rAmount: {
    fontFamily: 'Gadugi-Bold',
    paddingHorizontal: 4,
    fontSize: 14,
    paddingRight: 8,
  },
  txt: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 13,
  },
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  linkC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  lnkTxt: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
  },
});
