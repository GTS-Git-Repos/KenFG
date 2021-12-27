import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {
  CupIcon,
  DollarIcon,
  GoldenCup,
  RankIcon,
  TeamCode,
  TickIcon,
} from '../../../sharedComponents';
import {} from 'react-native-gesture-handler';

interface PropTypes {
  openPrizeBreakSheet: any;
}

export default function WinningContest(props: PropTypes) {
  return (
    <TouchableOpacity
      onPress={props.openPrizeBreakSheet}
      style={[tailwind('mx-2 bg-dark-3'), {borderRadius: 7, marginTop: 10}]}>
      <TopSection />
      <Footer />
      <JoinedTeamStatus />
      <YouWon />
    </TouchableOpacity>
  );
}

const TopSection = () => {
  return (
    <View style={[tailwind('flex-row items-center p-3')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Prize Pool
        </Text>
        <Text style={[tailwind('font-bold text-white font-16 py-0.5')]}>
          {'\u20B9'} 12.43 Lacks
        </Text>
      </View>

      <View style={[tailwind('flex-row  justify-center'), {flex: 4}]}>
        <View>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
            Spots
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
            16,000
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <View>
          <Text
            style={[tailwind('font-regular text-right text-dark-1 font-14')]}>
            Entry
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
            {'\u20B9'} 125
          </Text>
        </View>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={[tailwind('p-3 rounded-b'), {backgroundColor: '#121D2E'}]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <DollarIcon />
            <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
              {'\u20B9 '}
              20
            </Text>
          </View>

          <View style={[tailwind('flex-row px-1 items-center')]}>
            <CupIcon />
            <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
              50%
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

const JoinedTeamStatus = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row p-3 items-center'),
        {backgroundColor: props.selected ? '#006A4D' : ''},
      ]}>
      <View style={[tailwind('flex-row items-center'), {flex: 12 / 4}]}>
        <Text style={[tailwind('font-regular uppercase text-white font-14')]}>
          Team Name
        </Text>
        <View style={[tailwind('pl-2')]}>
          <TeamCode code={'T2'} />
        </View>
      </View>

      <View
        style={[tailwind(''), {flex: 12 / 4, position: 'relative', left: 8}]}>
        <Text
          style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
          50
        </Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-end'), {flex: 12 / 4}]}>
        <View style={[tailwind('flex-row items-center')]}>
          <RankIcon golden={false} />
          <Text style={[tailwind('font-bold px-1 text-white font-15')]}>
            10
          </Text>
        </View>
      </View>
    </View>
  );
};

const YouWon = () => {
  return (
    <View
      style={[
        tailwind('flex-row items-center bg-green p-3'),
        {borderBottomLeftRadius: 7, borderBottomRightRadius: 7},
      ]}>
      <GoldenCup />
      <Text style={[tailwind('font-bold px-2 text-white font-12')]}>
        You Won !
      </Text>
    </View>
  );
};
