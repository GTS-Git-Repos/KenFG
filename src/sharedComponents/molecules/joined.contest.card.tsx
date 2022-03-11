/**
 * used in contest lists screen *My Contests Tab*
 */

import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CapIcon, PencilEditIcon, VCIcon} from '../../assets/newIcons';
import ProgressBarShared from '../atoms/progressbar.shared';
import FooterContest from '../atoms/footer.contest';
import TeamCode from '../atoms/TeamCode';
import ShareIcon from "../icons/ShareIcon"
import SwitchIcon from "../icons/SwitchIcon"
import {TeamFormationMutationType} from '../../types/match';

interface PropTypes {
  match_key: string;
  contest_key: string;
  contest_name: string;
  amount_in_letters: string;
  entry_amount: string;
  // that prop need some work later
  max_entry_reached: boolean;
  slots: number;
  filled_slots: number;
  bonus: string;
  max_entry: number;
  isGuaranteed: boolean;
  contest_teams: Array<string>;
  joinedTeam: Array<any>;
  teamPreviewPress(team_key: string): any;
  onPressTeamSwitch(team_key: string, contest_key: string): void;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
  onPressJoinedContest(contest_key: string): void;
}

interface TeamInfoTypes {
  contest_key: string;
  team_key: string;
  code: string;
  cap: any;
  v_c: any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
  teamPreviewPress(team_key: string): any;
  onPressTeamSwitch(team_key: string, contest_key: string): void;
}

export default function JoinedContestCard(props: PropTypes) {
  // console.log(tailwind('rounded px-2 bg-dark-4'));

  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.onPressJoinedContest(props.contest_key)}
      style={[ss.root]}>
      <TopSection
        title={props.contest_name}
        entry_amount={props.entry_amount}
      />
      <View style={[ss.barroot]}>
        <ProgressBarShared spots={'20'} left={'19'} />
      </View>
      <FooterContest
        amount_letters={props.amount_in_letters}
        bonus={props.bonus}
        max_entry={props.max_entry}
        guaranteed={true}
      />
      <View style={[ss.pad8]}>
        <View style={[ss.frbc]}>
          <Text style={[ss.txt]}>
            Joined with {props.contest_teams.length} teams
          </Text>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Icon name="chevron-up-outline" size={16} color="#FFFFFF80" />
          </TouchableOpacity>
        </View>

        <JoinedTeams teams={props.contest_teams} />

        {open && (
          <View style={[ss.teamContainer]}>
            {props.joinedTeam.map((item: any, index: number) => {
              return (
                <View key={index} style={[ss.spaceTeams]}>
                  <TeamInfo
                    contest_key={props.contest_key}
                    team_key={item.teamCode}
                    code={item.teamCode}
                    cap={item.t_cap}
                    v_c={item.t_vc}
                    teamPreviewPress={props.teamPreviewPress}
                    teamMutateAction={props.teamMutateAction}
                    onPressTeamSwitch={props.onPressTeamSwitch}
                  />
                </View>
              );
            })}
          </View>
        )}
      </View>
      <ShareContest />
    </TouchableOpacity>
  );
}

const TopSection = (props: any) => {
  return (
    <View style={[ss.ts]}>
      <View style={[ss.frbc]}>
        <View>
          <Text style={[ss.headTitle]}>{props.title}</Text>
          <Text style={[ss.title]}>
            {'\u20B9 '} {props.title}
          </Text>
        </View>

        <View>
          <Text style={[ss.headTitle]}>Entry</Text>
          <Text style={[ss.title]}>
            {'\u20B9'} {props.entry_amount}
          </Text>
        </View>
      </View>
    </View>
  );
};

const JoinedTeams = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center flex-wrap py-2')]}>
      {props.teams.map((item: any, index: number) => {
        return <TeamCode code={item} key={index} />;
      })}
    </View>
  );
};

const TeamInfo = (props: TeamInfoTypes) => {

  return (
    <View style={[ss.teamRow]}>
      <TouchableOpacity
        onPress={() => props.teamPreviewPress(props.team_key)}
        style={[ss.teamPreviewTouch]}>
        <View style={[ss.teamCodeBox]}>
          <Text style={[ss.teamKey]}>{props.team_key}</Text>
        </View>
        <View style={[tailwind('px-2')]}>
          <View style={[tailwind('flex-row items-center ')]}>
            <CapIcon white={false} />
            <Text style={[tailwind('font-regular px-1 text-white font-14')]}>
              {props.cap.name}
            </Text>
          </View>
          <View style={[tailwind('flex-row pt-1 items-center')]}>
            <VCIcon white={false} />
            <Text style={[tailwind('font-regular px-1 text-white font-14')]}>
              {props.v_c.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity
          style={[tailwind('mx-1')]}
          onPress={() =>
            props.teamMutateAction(props.team_key, {edit: true, clone: false})
          }>
          <PencilEditIcon dT={true} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[tailwind('mx-1')]}
          onPress={() =>
            props.onPressTeamSwitch(props.team_key, props.contest_key)
          }>
          <SwitchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ShareContest = () => {
  return (
    <View style={[ss.shrRoot]}>
      <Text style={[ss.txt]}>Share this contest with your friends</Text>
      <ShareIcon />
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    paddingTop: 10,
    backgroundColor: '#172338',
    borderRadius: 6,
    marginBottom: 8,
  },
  ts: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  pad8: {
    padding: 8,
  },
  spaceTeams: {
    paddingBottom: 4,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(31, 41, 55,1)',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  barroot: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  frbc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headTitle: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  footerRoot: {
    padding: 12,
    backgroundColor: '#121C2F',
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
    fontSize: 15,
    paddingTop: 4,
    textTransform: 'capitalize',
  },
  shrRoot: {
    alignItems: 'center',
    backgroundColor: '#00513B',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  txt: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 14,
  },
  teamContainer: {
    backgroundColor: '#0D1320',
    borderRadius: 4,
    borderBottomColor: '#8797B14D',
    borderTopColor: '#8797B14D',
    borderLeftColor: '#8797B14D',
    borderRightColor: '#8797B14D',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  teamRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  teamPreviewTouch: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    paddingVertical: 8,
  },
  teamCodeBox: {
    backgroundColor: '#172338',
    marginBottom: 4,
    marginRight: 4,
    paddingVertical: 2,
    borderRadius: 2,
    paddingHorizontal: 6,
  },
  teamKey: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
