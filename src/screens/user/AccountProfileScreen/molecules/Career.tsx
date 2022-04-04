import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  career: any;
  dT: boolean;
}

export default function Career(props: PropTypes) {
  const dT = props.dT;
  return (
    <View
      style={[
        {elevation: 4, borderTopRightRadius: 4, borderTopLeftRadius: 4},
        dT ? clr.bgd2 : clr.bgw,
      ]}>
      <View style={[ss.root]}>
        <WinRate dT={dT} />
        <View style={[ss.frc, {marginTop: 10}]}>
          <MatchStat
            dT={dT}
            index={0}
            text="Mathches"
            value={props.career?.total_matches}
          />
          <MatchStat
            dT={dT}
            index={1}
            text="Series"
            value={props.career?.total_series}
          />
          <MatchStat
            dT={dT}
            index={2}
            text="Contests"
            value={props.career?.total_contests}
          />
        </View>
      </View>
      <View style={[ss.footC, props.dT ? clr.bgd1 : clr.bgw]}>
        <Text style={[ss.txt, {textAlign: 'center'}]}>
          You have been testing your skill in Kenfg since {props.career?.since}
        </Text>
      </View>
    </View>
  );
}

const WinRate = (props: any) => {
  const dT = props.dT;
  return (
    <View style={[ss.frc]}>
      <View style={[tailwind(''), {flex: 2}]}>
        <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Win Rate</Text>
        <Text style={[ss.wr, dT ? clr.tgl : clr.td1]}>
          {props.winrate || 'N/A'} %
        </Text>
      </View>
      <View style={[ss.pbar]}>
        <View style={[dT ? ss.dBar : ss.lBar, {width: '5%'}]}></View>
      </View>

      <View style={[tailwind(''), {flex: 3}]}>
        <Text style={[ss.txtT1, dT ? clr.tgl : clr.tr]}>Total Won</Text>
        <Text style={[ss.txt2, dT ? clr.tw : clr.td1]}>
          {'\u20B9'} {props.total_won || 'N/A'}
        </Text>
      </View>
    </View>
  );
};

const MatchStat = (props: any) => {
  return (
    <View
      style={[
        props.index === 1 && props.dT ? ss.dborder : {},
        props.index === 1 && !props.dT ? ss.lborder : {},
        {flex: 10 / 3},
      ]}>
      <Text
        style={[
          ss.valueTitle,
          props.index === 2 ? ss.tright : {},
          props.index === 1 ? ss.tCenter : {},
          props.dT ? clr.td2 : clr.td1,
        ]}>
        {props.text}
      </Text>
      <Text
        style={[
          ss.valueCount,
          props.index === 2 ? ss.tright : {},
          props.index === 1 ? ss.tCenter : {},
          props.dT ? clr.tw : clr.tdgray,
        ]}>
        {props.value}
      </Text>
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    // elevation: 4,
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'Gadugi-Normal',
    color: '#8797B1',
    fontSize: 13,
  },
  wr: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 13,
    paddingVertical: 8,
    alignItems: 'center',
  },
  pbar: {
    backgroundColor: 'rgba(31, 41, 55,0.3)',
    flex: 5,
    height: 5,
    borderRadius: 10,
  },
  dBar: {
    height: 5,
    borderRadius: 10,
    backgroundColor: '#C5A858',
  },
  lBar: {
    height: 5,
    borderRadius: 10,
    backgroundColor: '#9C181E',
  },
  txtT1: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  txt2: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 13,
    paddingVertical: 8,
    textAlign: 'right',
  },
  dborder: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  lborder: {
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  valueTitle: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 13,
  },
  tright: {
    textAlign: 'right',
  },
  tCenter: {
    textAlign: 'center',
  },
  valueCount: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 15,
    marginTop: 8,
  },
  footC: {
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
    padding: 6,
  },
});
