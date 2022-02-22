import React, {useReducer} from 'react';
import tailwind from '../../../../../tailwind';
import {View, ScrollView, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LastUpdatedAt from '../atoms/LastUpdatedAt';
import {HorizontalProfile, RankIcon} from '../../../../sharedComponents';
import LeaderBoardProfile from './LeaderBoardProfile';
import {
  contestMatchState,
  contestMatchReducer,
  fpSelector,
} from '../contest.match.controller';

interface PropTypes {
  index: number;
  activeIndex: number;
  onPressCompareTeam(src_team_key: string, opp_team_key: string): void;
}

export default function LeaderBoardPage(props: PropTypes) {
  const [matchState, dispatch] = useReducer(
    contestMatchReducer,
    contestMatchState,
  );

  const isComparisonActive = contestMatchState.isComparitionActive;

  const fantasyPlayers = fpSelector(matchState);

  const enableCompareState = () => {
    dispatch({type: 'UPDATE_COMPARE_STATE', payload: !isComparisonActive});
  };

  if (!fantasyPlayers) return null;

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <LastUpdatedAt
                updatedAt={'1.3'}
                enableCompareState={enableCompareState}
              />
              <Tabs />
              {isComparisonActive && <SelectOpTeamInfo />}
            </>
          );
        }}
        data={fantasyPlayers}
        renderItem={({item}) => {
          return (
            <LeaderBoardProfile
              image={''}
              name={item.name}
              teamCode={item.teamCode}
              points={item.points}
              rank={item.rank}
              isComparisonActive={isComparisonActive}
              onPressCompareTeam={props.onPressCompareTeam}
            />
          );
        }}
        keyExtractor={(item: any) => item.id}
        ListFooterComponent={() => <View style={[tailwind('h-10')]} />}
      />
    </View>
  );
}

const SelectOpTeamInfo = () => {
  return (
    <View style={[tailwind('bg-red-600 p-3')]}>
      <Text style={[tailwind('font-regular text-white font-15')]}>
        Please select Team to Compare
      </Text>
    </View>
  );
};

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
