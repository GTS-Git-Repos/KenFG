/**
 * used in contest lists screen and second innings contest list *My Contests Tab*
 */

import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CapIcon, PencilEditIcon, VCIcon} from '../../assets/newIcons';
import ProgressBarShared from '../atoms/progressbar.shared';
import FooterContest from '../atoms/footer.contest';
import TeamCode from '../atoms/TeamCode';
import ShareIcon from '../icons/ShareIcon';
import SwitchIcon from '../icons/SwitchIcon';
import {TeamFormationMutationType} from '../../types/match';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

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
  dT: boolean;
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
  const [open, setOpen] = useState(false);
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, !dT && ss.lRoot]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.onPressJoinedContest(props.contest_key)}>
        <View style={[ss.ts]}>
          <View style={[ss.frbc]}>
            <View>
              <Text style={[ss.headTitle, !dT && clr.td1]}>
                {props.contest_name}
              </Text>
              <Text style={[ss.title, !dT && clr.td1]}>
                {'\u20B9 '} {props.contest_name}
              </Text>
            </View>

            <View>
              <Text style={[ss.headTitle, !dT && clr.td1]}>Entry</Text>
              <Text style={[ss.title, !dT && clr.td1]}>
                {'\u20B9'} {props.entry_amount}
              </Text>
            </View>
          </View>
        </View>
        <View style={[ss.barroot]}>
          <ProgressBarShared spots={'20'} left={'19'} />
        </View>
        <FooterContest
          amount_letters={props.amount_in_letters}
          bonus={props.bonus}
          max_entry={props.max_entry}
          guaranteed={true}
        />
      </TouchableOpacity>

      <View style={[ss.pad8]}>
        <View style={[ss.frbc]}>
          <Text style={[ss.txt, !dT && clr.td1]}>
            Joined with {props.contest_teams.length} teams
          </Text>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Icon
              name="chevron-up-outline"
              size={16}
              color={dT ? '#FFFFFF80' : 'black'}
            />
          </TouchableOpacity>
        </View>

        <JoinedTeams teams={props.contest_teams} />

        {open && (
          <View style={[ss.tc, dT ? clr.bgd1 : clr.bgw]}>
            {props.joinedTeam.map((item: any, index: number) => {
              return (
                <View key={index} style={[ss.spaceTeams, !dT && ss.lTBoottom]}>
                  <TeamInfo
                    dT={dT}
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
      <View style={[ss.shrRoot, dT ? clr.bgGreen : clr.bgLgreen]}>
        <Text style={[ss.txt, clr.tw]}>
          Share this contest with your friends
        </Text>
        <ShareIcon />
      </View>
    </View>
  );
}

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
  const dT = props.dT;
  return (
    <View style={[ss.teamRow]}>
      <TouchableOpacity
        onPress={() => props.teamPreviewPress(props.team_key)}
        style={[ss.teamPreviewTouch]}>
        <View style={[ss.teamCodeBox, dT ? clr.bgd1 : clr.bgGray]}>
          <Text style={[ss.teamKey, dT ? clr.tw : clr.td1]}>
            {props.team_key}
          </Text>
        </View>
        <View style={[tailwind('px-2')]}>
          <View style={[tailwind('flex-row items-center ')]}>
            <CapIcon white={dT} />
            <Text style={[ss.cNmae, dT ? clr.tw : clr.td1]}>
              {props.cap.name}
            </Text>
          </View>
          <View style={[tailwind('flex-row pt-1 items-center')]}>
            <VCIcon white={dT} />
            <Text style={[ss.cNmae, dT ? clr.tw : clr.td1]}>
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
          <PencilEditIcon dT={dT} background={!dT} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[tailwind('mx-1')]}
          onPress={() =>
            props.onPressTeamSwitch(props.team_key, props.contest_key)
          }>
          <SwitchIcon  dT={dT} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    paddingTop: 10,
    backgroundColor: '#172338',
    borderRadius: 6,
    marginBottom: 8,
    elevation: 4,
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderWidth: 1,
    borderRadius: 8,
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
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },
  lTBoottom: {
    borderBottomColor: 'rgba(31, 41, 55,0.2)',
    borderBottomWidth: 1,
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
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  footerRoot: {
    padding: 12,
    backgroundColor: '#121C2F',
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Gadugi-Bold',
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
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
  },
  tc: {
    borderRadius: 4,
    borderColor: '#8797B14D',
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
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  cNmae: {
    fontFamily: 'Gadugi-Normal',
    paddingHorizontal: 4,
    fontSize: 14,
  },
});
