import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import TabCondtion from '../atoms/TabCondtions';
import SortTabs from '../atoms/SortTabs';
import Player from '../molecules/Players';

interface PropTypes {
  title: string;
}

export default function Page(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('bg-dark')]}>
        <TabCondtion text={props.title} />
        <SortTabs />
      </View>
      <ScrollView style={[tailwind('')]}>
        <Player
          player_id={'1'}
          teamname={'IND'}
          image={''}
          name={'V Kohli'}
          info={'Sel by 97.45%'}
          anounced={true}
          points={3}
          credits={10.0}
          isSelected={false}
        />
        <Player
          player_id={'1'}
          teamname={'IND'}
          image={''}
          name={'R Sharma'}
          info={'Sel by 97.45%'}
          anounced={true}
          points={3}
          credits={10.0}
          isSelected={false}
        />
        <Player
          player_id={'1'}
          teamname={'IND'}
          image={''}
          name={'R Sharma'}
          info={'Sel by 97.45%'}
          anounced={true}
          points={3}
          credits={10.0}
          isSelected={false}
        />
        <View style={[tailwind('h-40')]}></View>
      </ScrollView>
    </View>
  );
}
