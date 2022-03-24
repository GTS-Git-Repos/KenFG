import React, {useContext} from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, Image} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import SelectedIndicator from '../atoms/SelectedIndicator';
import Team1 from '../atoms/TeamOne';
import CreditsLeft from '../atoms/CreditsLeft';

const log = console.log;
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamimage1?: string;
  teamimage2?: string;
  teamname1: string;
  teamname2: string;
  teamcount1: number;
  teamcount2: number;
  credits_left: number;
  dT: boolean;
}

function TeamInfo(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <View style={[ss.sec1]}>
        <SelectedIndicator
          dT={props.dT}
          count={props.teamcount1 + props.teamcount2}
        />
        <Team1
          dT={props.dT}
          teamname={props.teamname1}
          teamcount={props.teamcount1}
          reverseUI={false}
        />
      </View>
      <View style={[ss.sec2]}>
        <Team1
          dT={props.dT}
          teamname={props.teamname2}
          teamcount={props.teamcount2}
          reverseUI={true}
        />
        <CreditsLeft dT={props.dT} left={props.credits_left} />
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 16,
  },
  sec1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 6,
  },
  sec2: {
    flexDirection: 'row',
    flex: 6,
  },
});

export default React.memo(TeamInfo);
