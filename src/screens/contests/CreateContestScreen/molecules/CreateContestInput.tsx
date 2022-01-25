import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import AllowMultipleTeam from '../atoms/AllowMultipleTeam';
import {ButtonComponent} from '../../../../sharedComponents';

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
}

export default function CreateContestInput(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('bg-dark-3 mx-4 rounded px-3 pt-7 pb-4')]}>
        <View style={[tailwind('mb-5')]}>
          <InputTitle text="Contest Name" />
          <UserInput
            value={props.contestName}
            onChangeText={props.setContestName}
          />
        </View>
        <View style={[tailwind('mb-5')]}>
          <InputTitle text="No of Teams" />
          <UserInput
            value={props.allowedTeams}
            isNumber={true}
            onChangeText={props.setAllowedTeams}
          />
        </View>
        <View style={[tailwind('mb-5')]}>
          <InputTitle text="Entry Fee" />
          <UserInput
            value={props.entryFee}
            isNumber={true}
            onChangeText={props.setEntryFee}
          />
        </View>
        <View style={[tailwind('mb-5 border border-green-700 rounded-lg p-3')]}>
          <InputTitle text="No of Winners" />
          <UserInput
            value={props.winners}
            isNumber={true}
            onChangeText={props.setWinners}
          />
          <TouchableOpacity
            style={[tailwind('flex-row justify-end pt-2')]}
            onPress={props.navigateToWinningsList}>
            <Text style={[tailwind('font-bold text-green-600 font-14')]}>
              View Winnings & Leaderboard
            </Text>
          </TouchableOpacity>
        </View>
        <AllowMultipleTeam
          selected={props.allowMultiple}
          setSelected={props.setAllowMultiple}
        />
        <View style={[tailwind('my-5')]}>
          <InputTitle text="No. of Teams Allowed Per User" />
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

const InputTitle = (props: any) => {
  return (
    <Text style={[tailwind('font-regular text-dark-1 font-14 pb-1')]}>
      {props.text}
    </Text>
  );
};

const UserInput = (props: any) => {
  return (
    <View style={[tailwind('')]}>
      <TextInput
        value={props.value}
        keyboardType={props.isNumber ? 'number-pad' : 'default'}
        onChangeText={e => props.onChangeText(e)}
        style={[
          tailwind(
            'p-0 m-0 border-b border-gray-700 font-20 text-white font-bold',
          ),
        ]}
      />
    </View>
  );
};
