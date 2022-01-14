import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {CupIcon, DollarIcon, MIcon, TickIcon} from '../../../../sharedComponents';

interface PropTypes {
  id: string;
  contest_name: string;
  hosted_by: string;
  amount: string;
  entry: string;
  max_team: number;
}

export default function PrivateContestCard(props: PropTypes) {
  return (
    <View style={[tailwind('mb-2 rounded-lg')]}>
      <View style={[tailwind('p-3 bg-dark-3')]}>
        <ContestMetaSection
          contest_name={props.contest_name}
          hosted_by={props.hosted_by}
          entry={props.entry}
        />
        <JoinContest amount={props.amount} />
        <ProgressBar />
      </View>
      <Footer />
    </View>
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

const ProgressBar = () => {
  return (
    <View>
      <View
        style={[
          tailwind('w-full rounded'),
          {height: 2.5, backgroundColor: '#8797B14D'},
        ]}>
        <View
          style={[
            tailwind('w-full'),
            {
              backgroundColor: '#B2933D',
              width: `10%`,
              height: 2.5,
            },
          ]}></View>
      </View>
      <View style={[tailwind('flex-row justify-between items-center pt-3')]}>
        <Text style={[tailwind('font-regular text-secondary font-14')]}>
          12442 spots left
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          2352 Spots
        </Text>
      </View>
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
              25 lacks
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
              upto 20
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
