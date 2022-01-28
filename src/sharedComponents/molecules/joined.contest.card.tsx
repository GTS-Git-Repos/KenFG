import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  CIcon,
  CupIcon,
  EditIcon,
  MIcon,
  ProgressbarShared,
  ShareIcon,
  SwitchIcon,
  TeamCode,
  TickIcon,
  VCIcon,
} from '../';
import {TeamFormationMutationType} from '../../types/match';

interface PropTypes {
  match_key: string;
  contest_key: string;
  contest_name: string;
  amount_in_letters: string;
  entry_amount: string;
  max_entry_reached: boolean;
  slots: number;
  filled_slots: number;
  bonus: string;
  max_entry: string;
  isGuaranteed: boolean;
  contest_teams: Array<string>;
  joinedTeam: Array<any>;
  teamPreviewPress(team_key: string): any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
}

interface TeamInfoTypes {
  team_key: string;
  code: string;
  cap: any;
  v_c: any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
}

export default function ContestCard(props: PropTypes) {
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {}}
      style={[tailwind('rounded mb-2 bg-dark-3')]}>
      <TopSection
        title={props.contest_name}
        entry_amount={props.entry_amount}
      />
      <Footer />
      <View style={[tailwind('p-2')]}>
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <Text style={[tailwind('font-regular text-white font-14')]}>
            Joined with {props.contest_teams.length} teams
          </Text>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Icon name="chevron-up-outline" size={16} color="#FFFFFF80" />
          </TouchableOpacity>
        </View>

        <JoinedTeams teams={props.contest_teams} />
        {open && (
          <View style={[tailwind('box rounded px-2 bg-dark-4'), styles.border]}>
            {props.joinedTeam.map((item: any, index: number) => {
              return (
                <View key={index} style={[tailwind('pb-1')]}>
                  <TeamInfo
                    team_key={item.teamCode}
                    code={item.teamCode}
                    cap={item.t_cap}
                    v_c={item.t_vc}
                    teamPreviewPress={props.teamPreviewPress}
                    teamMutateAction={props.teamMutateAction}
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
    <View style={[tailwind('p-2')]}>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <View>
          <Text
            style={[tailwind('font-regular capitalize text-dark-1 font-14')]}>
            {props.title}
          </Text>
          <Text
            style={[tailwind('font-bold pt-1 capitalize text-white font-15')]}>
            {'\u20B9 '}
            {props.title}
          </Text>
        </View>

        <View>
          <Text
            style={[tailwind('font-regular text-right text-dark-1 font-14')]}>
            Entry
          </Text>
          <Text
            style={[tailwind('font-bold pt-1 text-right text-dark-1 font-14')]}>
            {'\u20B9'} {props.entry_amount}
          </Text>
        </View>
      </View>
      <ProgressbarShared spots={'10,000'} left={'5,000'} />
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between p-3'),
        {backgroundColor: '#121C2F'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <CupIcon />
          <Text style={[tailwind('font-regular px-1 text-dark-1 font-12')]}>
            Winnings
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center px-2')]}>
          <MIcon />
          <Text style={[tailwind('font-regular px-1 text-dark-1 font-12')]}>
            upto 20
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <TickIcon />
        <Text style={[tailwind('font-regular pl-1 text-dark-1 font-12')]}>
          Guaranteed
        </Text>
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
    <View style={[tailwind('flex-row items-center px-1 justify-between')]}>
      <TouchableOpacity
        onPress={() => props.teamPreviewPress(props.team_key)}
        style={[tailwind('flex-row flex-grow  py-2 items-center')]}>
        <View
          style={[
            tailwind('py-0.5 mr-1 mb-1 bg-dark-3'),
            {borderRadius: 2, paddingHorizontal: 6},
          ]}>
          <Text style={[tailwind('font-regular text-white uppercase font-12')]}>
            {props.team_key}
          </Text>
        </View>
        <View style={[tailwind('px-2')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <CIcon white={false} />
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
          <EditIcon background={true} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[tailwind('mx-1')]}
          onPress={() => {
            ToastAndroid.show(
              'Switch Teams Not available currently ',
              ToastAndroid.SHORT,
            );
          }}>
          <SwitchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ShareContest = () => {
  return (
    <View
      style={[
        tailwind(
          'bg-green p-2 rounded-b-lg flex-row items-center justify-between',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        Share this contest with your friends
      </Text>
      <ShareIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#8797B14D',
    borderTopColor: '#8797B14D',
    borderLeftColor: '#8797B14D',
    borderRightColor: '#8797B14D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 1,
  },
});
