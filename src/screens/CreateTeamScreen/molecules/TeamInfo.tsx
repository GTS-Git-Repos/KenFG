import React, {useContext} from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
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
}

function TeamInfo(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row'), {padding: 17}]}>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <SelectedIndicator count={props.teamcount1 + props.teamcount2} />
        <Team1
          teamname={props.teamname1}
          teamcount={props.teamcount1}
          reverseUI={false}
        />
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <Team1
          teamname={props.teamname2}
          teamcount={props.teamcount2}
          reverseUI={true}
        />
        <CreditsLeft left={props.credits_left} />
      </View>
    </View>
  );
}

export default React.memo(TeamInfo);
