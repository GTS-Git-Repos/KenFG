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
import TeamInfo from './molecules/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import Tabs from './atoms/Tabs';
import TabCondtion from './atoms/TabCondtions';
import SortTabs from './atoms/SortTabs';
import Player from './molecules/Players';
import Line from './atoms/Line';
import BottomAction from './molecules/BottomAction';

export default function CreateTeamScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarCreateTeam />
      <LinearGradient colors={['#C5A858', '#B2933D']}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#C5A858', '#B2933D']}>
          <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />
          <Line />
          <TeamInfo
            teamname1={'IND'}
            teamname2={'PAK'}
            teamcount1={7}
            teamcount2={4}
            credits_left={2.5}
          />
        </LinearGradient>
        <Line />
        <SelectionIndicator count={8} />
      </LinearGradient>
      <View style={[tailwind('bg-dark')]}>
        <Tabs />
        <TabCondtion text={'Select 1-4 Wicket Keepers'} />
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
        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
      <BottomAction />
    </View>
  );
}

// start={{x: 0.2, y: 1.1}}
// end={{x: 1, y: 0.1}}
// locations={[0.4, 0]}
// colors={['#C5A858', '#B2933D']}>
