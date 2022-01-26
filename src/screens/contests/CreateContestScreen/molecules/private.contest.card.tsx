import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {
  CupIcon,
  DollarIcon,
  MIcon,
  TickIcon,
} from '../../../../sharedComponents';
import {ProgressbarShared} from '../../../../sharedComponents';

interface PropTypes {
  contest_key: string;
  contest_name: string;
  hosted_by: string;
  entry_amount: string;
  price_amount: string;
  max_entry: string;
  amount_in_letters: string;
  onPressContestCard(contest_key: string): any;
  joinContest(team_key: string): any;
}

export default function PrivateContestCard(props: PropTypes) {
  
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => props.onPressContestCard(props.contest_key)}
      style={[tailwind('mb-2 rounded-lg')]}>
      <View style={[tailwind('p-3 bg-dark-3')]}>
        <ContestMetaSection
          contest_name={props.contest_name}
          hosted_by={props.hosted_by}
          entry={props.entry_amount}
        />
        <JoinContest
          contest_key={props.contest_key}
          joinContest={props.joinContest}
          amount={props.entry_amount}
        />
        <ProgressbarShared spots={'5000'} left={'100'} />
      </View>
      <Footer
        amount_in_letters={props.amount_in_letters}
        max_entry={props.max_entry}
      />
    </TouchableOpacity>
  );
}

const ContestMetaSection = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <View>
        <Text style={[tailwind('font-bold text-white pb-0.5 font-14')]}>
          {props.contest_name}'s Contest
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          Hosted by {props.hosted_by}
        </Text>
      </View>
      <Text style={[tailwind('font-bold text-white font-18')]}>
        {'\u20B9 '}
        {props.entry}
      </Text>
    </View>
  );
};

const JoinContest = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center py-2 justify-between')]}>
      <Text style={[tailwind('font-bold text-white font-18')]}>
        {'\u20B9 '}
        {props.amount}
      </Text>

      <TouchableOpacity
        onPress={() => props.joinContest(props.contest_key)}
        style={[
          tailwind('rounded px-4 py-1'),
          {
            backgroundColor: '#006A4D',
          },
        ]}>
        <Text
          style={[
            tailwind('font-bold uppercase text-center text-light font-14'),
          ]}>
          Join
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Footer = (props: any) => {
  return (
    <View
      style={[tailwind('py-3 px-4 rounded-b'), {backgroundColor: '#121D2E'}]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <DollarIcon />
            <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
              {'\u20B9 '}
              {props.amount_in_letters}
            </Text>
          </View>

          <View style={[tailwind('flex-row px-1 items-center')]}>
            <CupIcon />
            <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
              53%
            </Text>
          </View>

          <View style={[tailwind('flex-row items-center')]}>
            <MIcon />
            <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
              upto {props.max_entry}
            </Text>
          </View>
        </View>

        <View style={[tailwind('flex-row items-center')]}>
          <TickIcon />
          <Text style={[tailwind('font-regular text-dark-1 pl-2    font-13')]}>
            Gauranteed
          </Text>
        </View>
      </View>
    </View>
  );
};
