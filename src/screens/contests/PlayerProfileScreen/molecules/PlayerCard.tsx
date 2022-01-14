import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Dimensions, Text} from 'react-native';
import PlayerInfo from '../atoms/PlayerInfo';
import RowHeader from '../atoms/RowHeader';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

const PLAYERCARDWIDTH = Dimensions.get('window').width * 0.8;

export default function PlayerCard(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <PlayerInfo selected_by={'64.42 %'} credits={'32'} points={'234'} />
      <Text style={[tailwind('font-bold px-5 py-3 text-light font-17')]}>
        Ravindar Jadeja
      </Text>
     
    </View>
  );
}
