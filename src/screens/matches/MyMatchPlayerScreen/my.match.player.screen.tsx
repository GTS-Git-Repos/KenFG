import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';

import assets from '../../../constants/assets_manifest';
import {useSelector} from 'react-redux';

import {TopBar} from '../../../sharedComponents/';

const log = console.log;

interface PropTypes {
  playerMeta: any;
  playerScore: any;
}

export default function MyMatchPlayerScreen(props: PropTypes) {
  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <TopBar text={'Player Info'} />

      <ScrollView contentContainerStyle={ss.container}>
        <View style={[ss.profileC]}>
          <View style={[ss.iContainer]}>
            <Image
              resizeMode="contain"
              source={assets.player}
              style={[ss.image]}
            />
          </View>
          <View style={[ss.frcb]}>
            <View style={[tailwind('')]}>
              <Text style={[ss.txt]}>Selected By</Text>
              <Text style={[ss.value]}>22.3 %</Text>
            </View>
            <View style={[tailwind('')]}>
              <Text style={[ss.txt]}>Points</Text>
              <Text style={[ss.value, ss.val2]}>32</Text>
            </View>
            <View style={[tailwind('')]}>
              <Text style={[ss.txt]}>Credits</Text>
              <Text style={[ss.value, ss.val3]}>8</Text>
            </View>
          </View>
        </View>
        <Text style={ss.name}>Chris Gayle</Text>

        <View style={[ss.tableHeader]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.headTxt]}>EVENT</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.headTxt]}>ACTUAL</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.headTxt]}>POINTS</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>DUCK</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>0</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>OVERS BOWLED</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>0</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>WICKETS</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>0</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>LBW / Bowled Bonus</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>0</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>2/3/4 Wicket Bonus</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>0</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>Maiden Over</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>0</Text>
          </View>
        </View>

        <View style={[ss.scoreC]}>
          <View style={[ss.opt1]}>
            <Text style={[ss.scoreTitle]}>E / R</Text>
          </View>
          <View style={[ss.opt2]}>
            <Text style={[ss.actS]}>0</Text>
          </View>
          <View style={[ss.opt3]}>
            <Text style={[ss.point]}>N/A</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#0c1320',
  },
  container: {
    padding: 16,
  },
  profileC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#00513B',
  },
  iContainer: {
    paddingRight: 16,
  },
  image: {
    width: 62,
    height: 70,
  },
  txt: {
    fontFamily: 'gadugi-normal',
    color: '#FFFFFF',
    fontSize: 14,
  },
  value: {
    fontFamily: 'gadugi-bold',
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 6,
  },
  val2: {
    textAlign: 'center',
  },
  val3: {
    textAlign: 'right',
  },

  frcb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  name: {
    fontFamily: 'gadugi-bold',
    color: '#FFFFFF',
    fontSize: 24,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#172338',
    padding: 12,
  },
  opt1: {
    flex: 4,
  },
  opt2: {
    flex: 2,
    // alignItems: 'center',
  },
  opt3: {
    flex: 3,
    alignItems: 'flex-end',
  },
  headTxt: {
    fontFamily: 'gadugi-normal',
    color: '#FFFFFF',
    fontSize: 14,
  },
  scoreC: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: 'rgb(31, 41, 55)',
    borderBottomWidth: 1,
  },
  scoreTitle: {
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    fontSize: 14,
  },
  actS: {
    fontFamily: 'gadugi-normal',
    color: '#FFFFFF',
    fontSize: 15,
    // textAlign:"center"
    paddingHorizontal: 24,
  },
  point: {
    fontFamily: 'gadugi-normal',
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'right',
  },
});
