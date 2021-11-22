import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
import SelectedIndicator from '../atoms/SelectedIndicator';
import Team1 from '../atoms/TeamOne';
import CreditsLeft from '../atoms/CreditsLeft';
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

export default function TeamInfo(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row'), {padding: 17}]}>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <SelectedIndicator count={3} />
        <Team1 teamname={'IND'} teamcount={'2'} reverseUI={false} />
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <Team1 teamname={'NZ'} teamcount={'2'} reverseUI={true} />
        <CreditsLeft left={80.0} />
      </View>
    </View>
  );
}
