import React, {useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {BlockScreenByLoading, TopBar} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {CompareTeamType} from '../../../types/compareTeam';
import SelectTeamSheet from './molecules/SelectTeamSheet';
import FantasyPlayer from './atoms/FantasyPlayer';
import {Modalize} from 'react-native-modalize';
import SelectTeamHeader from './atoms/SelectTeamHeader';
import CompareTeamLoading from './atoms/CompareTeamLoading';
import Points from './atoms/Points';
import Status from './atoms/Status';
import PlayerStats from './molecules/PlayersStats';

const log = console.log;

interface PropTypes {
  compareTeam: setCompareTeamType;
  loading: boolean;
  playersData: CompareTeamType;
}

interface setCompareTeamType {
  src_player: string;
  opp_player: string;
  src_playerTeams: Array<string>;
  opp_playerTeams: Array<string>;
  srcTeam: TeamType;
  opTeam: TeamType;
}

interface TeamType {
  team_key: string;
  rank: string;
  points: number;
}

interface SectionType {
  title: string;
  srcTeamPoints: number;
  OppTeamPoints: number;
}

export default function CompareTeamScreen(props: PropTypes) {
  const selectSheet = useRef(null);
  const selectOpponentSheet = useRef(null);

  const isScreenReady = useIsScreenReady();

  if (isScreenReady === false) {
    return <CompareTeamLoading text={'Compare Teams'} />;
  }

  return (
    <View style={tailwind('bg-dark-4 h-full')}>
      <TopBar text={'Compare Teams'} ptsIcon={true} />
      <ScrollView>
        <View style={[tailwind('bg-dark-3')]}>
          <FantasyPlayer
            player1={props.compareTeam.src_player}
            player2={props.compareTeam.opp_player}
            srcTeam={props.compareTeam.srcTeam}
            opTeam={props.compareTeam.opTeam}
            selectSheet={selectSheet}
            selectOpponentSheet={selectOpponentSheet}
          />
          <Points
            sel_team_points={props.compareTeam.srcTeam.points}
            op_team_points={props.compareTeam.opTeam.points}
          />
          <Status
            sel_team_points={props.compareTeam.srcTeam.points}
            op_team_points={props.compareTeam.opTeam.points}
          />
        </View>
        <View style={[tailwind('h-2 bg-dark-4')]}></View>
        <Title title={'Comman Players'} srcTeamPoints={1} OppTeamPoints={33} />
        <PlayerStats
          srcTeamPlayers={props.playersData.commanPlayers}
          oppTeamPlayers={props.playersData.commanPlayers}
        />
        <Title
          title={'Diffrent Players'}
          srcTeamPoints={1}
          OppTeamPoints={33}
        />
        <PlayerStats
          srcTeamPlayers={props.playersData.diffPlayersSrcTeam}
          oppTeamPlayers={props.playersData.diffPlayersOppTeam}
        />
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
          {props.compareTeam.src_playerTeams.map(item => {
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
          {props.compareTeam.opp_playerTeams.map(item => {
            return <SelectTeamSheet name={item} key={item} />;
          })}
        </View>
      </Modalize>

      {props.loading && <BlockScreenByLoading />}
    </View>
  );
}

const Title = (props: SectionType) => {
  return (
    <View style={[tailwind('py-3 bg-dark-3')]}>
      <Text style={[tailwind('font-bold text-center pt-1 text-light font-16')]}>
        {props.title}
      </Text>
      {props.srcTeamPoints > props.OppTeamPoints && (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You are
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.srcTeamPoints - props.OppTeamPoints}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-15')]}>
            pts ahead
          </Text>
        </View>
      )}

      {props.srcTeamPoints < props.OppTeamPoints && (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You are opponents player are
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.OppTeamPoints - props.srcTeamPoints}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-15')]}>
            pts ahead
          </Text>
        </View>
      )}

      {props.srcTeamPoints === props.OppTeamPoints && (
        <View style={[tailwind('flex-row justify-center py-3 items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
            You both are Equal Points
          </Text>
          <Text style={[tailwind('font-bold px-1 text-green-600 font-16')]}>
            {props.srcTeamPoints}
          </Text>
        </View>
      )}
    </View>
  );
};
