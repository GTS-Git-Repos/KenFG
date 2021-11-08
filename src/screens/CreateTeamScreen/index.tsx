import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';
import TeamInfo from './atoms/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import Tabs from './atoms/Tabs';
import TabCondtion from './atoms/TabCondtions';
import SortTabs from './atoms/SortTabs';
import Player from './molecules/Players';
export default function CreateTeamScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <LinearGradient colors={['#C2A554', '#BB9C49', '#BB9C49']}>
        <TopBarCreateTeam />
        <MatchStatus />
        <TeamInfo
          teamname1={'IND'}
          teamname2={'PAK'}
          teamcount1={7}
          teamcount2={4}
          credits_left={2.5}
        />
        <SelectionIndicator count={8} />
      </LinearGradient>
      <View style={[tailwind('bg-primary')]}>
        <Tabs />
        <TabCondtion text={'Select 3-6 Better'} />
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
          teamname={'NZ'}
          image={''}
          name={'K Williamson'}
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
      </ScrollView>
    </View>
  );
}
