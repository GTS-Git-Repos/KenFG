import React, {useRef} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar, FullScreenLoading} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../utils/customHoooks';

import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import SelectTeamSheet from './molecules/SelectTeamSheet';
import FantasyPlayer from './atoms/FantasyPlayer';
import Points from './atoms/Points';
import Status from './atoms/Status';
import PlayerStats from './molecules/PlayersStats';
import {Modalize} from 'react-native-modalize';
import SelectTeamHeader from './atoms/SelectTeamHeader';
import TopBarCompareTeam from './atoms/TopBarCompareTeam';
import CompareTeamLoading from './atoms/CompareTeamLoading';

const log = console.log;

interface PropTypes {
  f_1: string;
  f_2: string;
  f_1_teams: Array<any>;
  f_2_teams: Array<any>;
  selected_team: string;
  op_team: string;
  diff_players: Array<any>;
  comman_players: Array<any>;
}

interface SectionType {
  title: string;
  team_a_points: number;
  team_b_points: number;
}

export default function CompareTeamScreen(props: PropTypes) {
  const navigation = useNavigation();
  const selectSheet = useRef(null);
  const selectOpponentSheet = useRef(null);

  const isScreenReady = useIsScreenReady();

  if (isScreenReady === false) {
    return <CompareTeamLoading text={'Compare Teams'} />;
  }

  return (
    <View style={tailwind('bg-dark-4 h-full')}>
      <TopBarCompareTeam text={'Compare Teams'} />
      <ScrollView>
        <View style={[tailwind('bg-dark-3')]}>
          <FantasyPlayer
            player1={props.f_1}
            player2={props.f_2}
            selectSheet={selectSheet}
            selectOpponentSheet={selectOpponentSheet}
            selected_team={props.selected_team}
            op_team={props.op_team}
          />
          <Points selected_team={props.selected_team} op_team={props.op_team} />
          <Status selected_team={props.selected_team} op_team={props.op_team} />
        </View>
        <View style={[tailwind('h-2 bg-dark-4')]}></View>
        <Title
          title={'Diffrent Players'}
          team_a_points={100}
          team_b_points={232}
        />
        {/* <PlayerStats title={'Diffrent Players'} points={150} ahead={false} />*/}
      </ScrollView>

      <Modalize
        ref={selectSheet}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        HeaderComponent={() => {
          return <SelectTeamHeader text={'Select Your Team'} />;
        }}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <View style={[tailwind('')]}>
          {props.f_1_teams.map(item => {
            return <SelectTeamSheet name={item} key={item} />;
          })}
        </View>
      </Modalize>

      <Modalize
        ref={selectOpponentSheet}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        HeaderComponent={() => {
          return <SelectTeamHeader text={'Select Opponent Team'} />;
        }}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <View style={[tailwind('')]}>
          {['Team1', 'Team2', 'Team3', 'Team4', 'Team5'].map(item => {
            return <SelectTeamSheet name={item} key={item} />;
          })}
        </View>
      </Modalize>
    </View>
  );
}

const Title = (props: SectionType) => {
  return (
    <View style={[tailwind('py-3 bg-dark-3')]}>
      <Text style={[tailwind('font-bold text-center pt-1 text-light font-16')]}>
        {props.title}
      </Text>
      {props.team_a_points > props.team_b_points && (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You are
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.team_a_points - props.team_b_points}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-15')]}>
            pts ahead
          </Text>
        </View>
      )}

      {props.team_a_points < props.team_b_points && (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You are opponents player are
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.team_b_points - props.team_a_points}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-15')]}>
            pts ahead
          </Text>
        </View>
      )}

      {props.team_a_points === props.team_b_points && (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You both are Equal Points
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.team_a_points}
          </Text>
        </View>
      )}
    </View>
  );
};
