import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LastUpdatedAt from '../atoms/LastUpdatedAt';
import {HorizontalProfile, RankIcon} from '../../../sharedComponents';
import LeaderBoardProfile from './LeaderBoardProfile';

interface PropTypes {
  text?: string;
}

export default function LeaderBoardPage(props: PropTypes) {
  return (
    <View>
      <ScrollView>
        <View style={[tailwind('')]}>
          <View style={[tailwind('h-3')]}></View>
          <LastUpdatedAt updatedAt={'1.3'} />
          <Tabs />
          <LeaderBoardProfile
            image={''}
            name={'Your Team'}
            teamCode={'T20'}
            points={42}
            rank={'32,333,232'}
          />
          <LeaderBoardProfile
            image={''}
            name={'Your Team'}
            teamCode={'T53'}
            points={42}
            rank={'11,333,232'}
          />

          <LeaderBoardProfile
            image={''}
            name={'Player One'}
            teamCode={'T20'}
            points={42}
            rank={'32,333,232'}
          />
          <LeaderBoardProfile
            image={''}
            name={'Player Two'}
            teamCode={'T53'}
            points={42}
            rank={'32,333,232'}
          />
          <LeaderBoardProfile
            image={''}
            name={'Player One'}
            teamCode={'T20'}
            points={42}
            rank={'32,333,232'}
          />

          <LeaderBoardProfile
            image={''}
            name={'Player 1'}
            teamCode={'T20'}
            points={42}
            rank={'32,333,232'}
          />
          <LeaderBoardProfile
            image={''}
            name={'Player 3'}
            teamCode={'T20'}
            points={42}
            rank={'563,232'}
          />
        </View>
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}

const Tabs = () => {
  return (
    <View style={[tailwind('flex-row px-4 py-3 items-center bg-dark-4')]}>
      <View style={[{flex: 5}]}>
        <Text
          style={[
            tailwind('font-bold text-center text-left  text-dark-1 font-13'),
          ]}>
          All Teams
        </Text>
      </View>
      <View style={[{flex: 2}]}>
        <Text style={[tailwind('font-bold  text-dark-1 font-13')]}>Points</Text>
      </View>
      <View
        style={[tailwind('flex-row justify-center items-center'), {flex: 3}]}>
        <RankIcon golden={true} />
        <Text
          style={[
            tailwind(
              'font-bold text-center text-center text-dark-1 px-1 font-13',
            ),
          ]}>
          Ranks
        </Text>
      </View>
    </View>
  );
};
