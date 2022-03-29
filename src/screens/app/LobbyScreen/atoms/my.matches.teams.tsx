//
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TeamFlag} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
  team_a: TeamType;
  team_b: TeamType;
  status: string;
  countDown: string;
}

interface TeamType {
  key: string;
  name: string;
  code: string;
}

export default function Teams(props: PropTypes) {
  return (
    <View style={[styles.ct]}>
      <View style={styles.sec1}>
        <View style={[styles.b1]}></View>
        <View>
          <TeamFlag teamCode={props.team_a.code} />
          <Text style={[styles.teamCode, props.dT ? clr.tw : clr.td1]}>
            {props.team_a.code}
          </Text>
        </View>
      </View>

      {/* status*/}

      <View style={styles.statusC}>
        {props.status === 'completed' && <IsCompleted dT={props.dT}/>}
        {props.status === 'started' && <IsLive dT={props.dT} />}
        {props.status === 'notstarted' && (
          <Text style={[styles.countDownText, props.dT ? clr.tw : clr.td1]}>
            {props.countDown}
          </Text>
        )}
      </View>

      <View style={styles.sec2}>
        <View>
          <TeamFlag teamCode={props.team_b.code} />
          <Text style={[styles.teamCode, props.dT ? clr.tw : clr.td1]}>
            {props.team_b.code}
          </Text>
        </View>
        <View style={[styles.b2]}></View>
      </View>
    </View>
  );
}

const IsLive = (props: any) => {
  return (
    <View style={styles.completeC}>
      <View style={styles.cIndic}></View>
      <Text style={[styles.cTxt, props.dT ? clr.tw : clr.tr]}>LIVE</Text>
    </View>
  );
};

const IsCompleted = (props: any) => {
  return (
    <View style={[styles.completeC]}>
      <View style={[styles.cIndic]}></View>
      <Text style={[styles.cTxt, props.dT ? clr.tw : clr.tgreen]}>
        COMPLETED
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  sec1: {
    flexDirection: 'row',
    flex: 4,
  },
  sec2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 4,
  },
  b1: {
    backgroundColor: 'red',
    width: 10,
    height: 14,
    top: 6,
  },
  b2: {
    backgroundColor: 'green',
    width: 10,
    height: 14,
    top: 6,
  },
  flagWrapper: {
    width: 45,
    height: 25,
    backgroundColor: '#0c1320',
    borderRadius: 2,
  },
  teamCode: {
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    paddingBottom: 2,
    paddingTop: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  statusC: {
    alignItems: 'center',
    flex: 4,
  },
  countDownText: {
    fontFamily: 'gadugi-bold',
    fontSize: 13,
    paddingTop: 8,
    paddingHorizontal: 4,
  },
  completeC: {
    flexDirection: 'row',
    paddingTop: 8,
    alignItems: 'center',
  },
  cIndic: {
    width: 6,
    height: 6,
    backgroundColor: '#00513B',
    marginHorizontal: 4,
    borderRadius: 6,
  },
  cTxt: {
    textAlign: 'center',
    fontSize: 11,
    color: '#00513B',
  },
});
