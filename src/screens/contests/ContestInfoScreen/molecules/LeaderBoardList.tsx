import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  useWindowDimensions,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import HeaderLeaderBoard from '../atoms/HeaderLeaderBoard';
import {ContestTeams} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../../utils/snakBars';
import ShareContest from '../atoms/ShareContest';
import NoLeaderBoardContent from '../atoms/no.leaderboard.content';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  index: number;
  activeIndex: number;
  ldbLive: boolean;
  ldbMeta: any;
  ldbErr: boolean;
  lbProfileOnPress(player_key: string, teamCode: string): any;
  teamSwapOnPress(teamCode: string): any;
}

export default function LearderBoard(props: PropTypes) {
  // console.log('leaderboard --->', props.ldbMeta);

  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  const navigate = (matchStarted: boolean) => {
    if (matchStarted) {
      // navigation.navigate('CompareTeamsScreen');
    } else {
      errorBox('Please wait till the match starts to view other teams', 100);
    }
  };

  // when an api error is active
  if (props.ldbErr) {
    return <NoLeaderBoardContent loading={false} error={true} />;
  }
  // when an ldbMeta is undefined or api on isFetching state
  if (!props.ldbMeta || props.ldbLive) {
    return <NoLeaderBoardContent loading={true} error={false} />;
  }

  return (
    <FlatList
      contentContainerStyle={{width: width}}
      data={props.ldbMeta}
      renderItem={({item, index}) => {
        return (
          <ContestTeams
            key={index.toString()}
            player_key={item.player_key}
            image={'https://t.ly/ZGWf'}
            name={item.player_name}
            teamCode={item.team_key}
            currentUser={item.is_current}
            hasStatus={false}
            matchStarted={false}
            lbProfileOnPress={props.lbProfileOnPress}
            teamSwapOnPress={props.teamSwapOnPress}
          />
        );
      }}
      ListHeaderComponent={() => {
        return (
          <>
            <ShareContest />
            <HeaderLeaderBoard length={props?.ldbMeta?.length} />
          </>
        );
      }}
      ListFooterComponent={() => {
        return <View style={[tailwind('h-20')]}></View>;
      }}
    />
  );
}
