import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import AllowMultipleTeam from '../atoms/AllowMultipleTeam';
import {ButtonComponent} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function CreateContestInput(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('bg-dark-3 mx-4 rounded px-3 pt-7 pb-4')]}>
        <View style={[tailwind('mb-5')]}>
          <InputTitle text="Contest Name" />
          <UserInput value="Kairo" />
        </View>
        <View style={[tailwind('mb-5')]}>
          <InputTitle text="No of Teams" />
          <UserInput value="1000" />
        </View>
        <View style={[tailwind('mb-5')]}>
          <InputTitle text="Entry Fee" />
          <UserInput value="2000" />
        </View>
        <View style={[tailwind('mb-5 border border-green-700 rounded-lg p-3')]}>
          <InputTitle text="No of Winners" />
          <UserInput value="250" />
          <Text
            style={[
              tailwind('font-bold text-right pt-2 text-green-600 font-14'),
            ]}>
            View Winnings & Leaderboard
          </Text>
        </View>
        <AllowMultipleTeam />
        <View style={[tailwind('my-5')]}>
          <InputTitle text="No. of Teams Allowed" />
          <UserInput value="250" />
        </View>
        <TouchableOpacity style={[tailwind('m-4')]}>
          <ButtonComponent text={'CREATE & EARN Rs.2,00,000'} />
        </TouchableOpacity>
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
        style={[
          tailwind(
            'p-0 m-0 border-b border-gray-800 font-20 text-white font-bold',
          ),
        ]}
      />
    </View>
  );
};
