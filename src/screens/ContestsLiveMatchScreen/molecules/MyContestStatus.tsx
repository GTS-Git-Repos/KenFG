import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {
  CupIcon,
  DollarIcon,
  DownArrowIcon,
  RankIcon,
  TickIcon,
} from '../../../sharedComponents/';

interface PropTypes {
  text?: string;
}

export default function MyContestStatus(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 rounded m-2')]}>
      <TopSection />
      <ContestAttributes />
      <JoinedTeamStatus selected={true} />
      <JoinedTeamStatus selected={false} />
      <JoinedTeamStatus selected={false} />
    </View>
  );
}

const TopSection = () => {
  return (
    <View style={[tailwind('flex-row items-center justify-between p-3')]}>
      <View>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Prize Pool
        </Text>
        <Text style={[tailwind('font-bold text-white font-16 py-0.5')]}>
          {'\u20B9'} 12.43 Lacks
        </Text>
      </View>

      <View style={[tailwind('')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Spots
        </Text>
        <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
          16,000
        </Text>
      </View>
      <View>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Entry
        </Text>
        <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
          {'\u20B9'} 125
        </Text>
      </View>
    </View>
  );
};

const ContestAttributes = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between px-3 py-2'),
        {backgroundColor: '#121C2F'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <DollarIcon />
          <Text style={[tailwind('font-regular text-dark-1 px-0.5 font-12')]}>
            {'\u20B9'} {props.amount}
          </Text>
        </View>
        <View style={[tailwind('flex-row items-center px-2')]}>
          <CupIcon />
          <Text style={[tailwind('font-regular text-dark-1 px-0.5 font-12')]}>
            60%
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-regular pr-1 text-dark-1 font-12')]}>
          Gauranteed
        </Text>
        <TickIcon />
      </View>
    </View>
  );
};

const JoinedTeamStatus = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row p-3 items-center'),
        {backgroundColor: props.selected ? '#006A4D' : ''},
      ]}>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <Text style={[tailwind('font-regular uppercase text-white font-14')]}>
          Team Name
        </Text>
        <View style={[tailwind('py-1 mx-2 px-2 bg-dark-4')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-12')]}>T1</Text>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center justify-end'), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>50</Text>
        <View style={[tailwind('flex-row px-2 items-center')]}>
          <RankIcon golden={false} />
          <Text style={[tailwind('font-bold px-1 text-white font-15')]}>
            10
          </Text>
        </View>
        <DownArrowIcon />
      </View>
    </View>
  );
};
