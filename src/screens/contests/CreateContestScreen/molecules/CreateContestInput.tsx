import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import AllowMultipleTeam from '../atoms/AllowMultipleTeam';
import {ButtonComponent} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  contestName: string;
  setContestName(input: any): any;
  allowedTeams: string;
  setAllowedTeams(input: any): any;
  entryFee: string;
  setEntryFee(input: any): any;
  winners: string;
  setWinners(input: any): any;
  allowMultiple: boolean;
  setAllowMultiple(input: any): any;
  perUserTeam: string;
  setPerUserTeam(input: any): any;
  navigateToWinningsList(): any;
  validateInput(): any;
  dT: boolean;
}

export default function CreateContestInput(props: PropTypes) {
  const dT = props.dT;
  return (
    <View>
      <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
        <View style={[ss.mb20]}>
          <Text style={[ss.subtitle, dT ? clr.td2 : clr.td1]}>
            Contest Name
          </Text>

          <UserInput
            value={props.contestName}
            onChangeText={props.setContestName}
          />
        </View>
        <View style={[ss.mb20]}>
          <Text style={[ss.subtitle, dT ? clr.td2 : clr.td1]}>No of Teams</Text>

          <UserInput
            value={props.allowedTeams}
            isNumber={true}
            onChangeText={props.setAllowedTeams}
            dT={dT}
          />
        </View>
        <View style={[ss.mb20]}>
          <Text style={[ss.subtitle, dT ? clr.td2 : clr.td1]}>Entry Fee</Text>
          <UserInput
            value={props.entryFee}
            isNumber={true}
            onChangeText={props.setEntryFee}
            dT={dT}
          />
        </View>
        <View style={[ss.winnersContainer]}>
          <Text style={[ss.subtitle, dT ? clr.td2 : clr.td1]}>
            No of Winners
          </Text>

          <UserInput
            value={props.winners}
            isNumber={true}
            onChangeText={props.setWinners}
            dT={dT}
          />
          <TouchableOpacity
            style={[tailwind('flex-row justify-end pt-2')]}
            onPress={props.navigateToWinningsList}>
            <Text style={[tailwind('font-bold text-green-600 font-14')]}>
              View Winnings & Leaderboard
            </Text>
          </TouchableOpacity>
        </View>
        {/* Multiple team */}

        <AllowMultipleTeam
          selected={props.allowMultiple}
          setSelected={props.setAllowMultiple}
          dT={dT}
        />
        <View style={[tailwind('my-5')]}>
          <Text style={[ss.subtitle]}>No. of Teams Allowed Per User</Text>

          <UserInput
            value={props.perUserTeam}
            isNumber={true}
            onChangeText={props.setPerUserTeam}
          />
        </View>
      </View>
    </View>
  );
}

const UserInput = (props: any) => {
  return (
    <View>
      <TextInput
        value={props.value}
        keyboardType={props.isNumber ? 'number-pad' : 'default'}
        onChangeText={e => props.onChangeText(e)}
        style={[ss.input, props.dT ? ss.dBorder : ss.lBorder]}
      />
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginVertical: 16,
    marginHorizontal: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    elevation: 4,
  },
  mb20: {
    marginBottom: 20,
  },
  input: {
    borderBottomColor: 'rgba(55, 65, 81, 1)',
    borderBottomWidth: 1,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
    fontSize: 20,
    margin: 0,
    padding: 0,
  },
  dBorder: {
    color: '#FFFFFF',
    borderBottomColor: 'rgba(31, 41, 55,1)',
  },
  lBorder: {
    color: '#0D1320',
    borderBottomColor: 'rgba(31, 41, 55,0.2)',
  },
  subtitle: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    paddingBottom: 4,
  },
  winnersContainer: {
    borderColor: 'rgba(4, 120, 87, 1)',
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 20,
  },
});
