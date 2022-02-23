import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, useWindowDimensions, Text, ScrollView} from 'react-native';
import HeaderLeaderBoard from '../atoms/HeaderLeaderBoard';
import {HorizontalProfile} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../../utils/snakBars';
import ShareContest from '../atoms/ShareContest';
import NoLeaderBoardContent from '../atoms/no.leaderboard.content';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  leaderBoardMeta: any;
}

export default function LearderBoard(props: PropTypes) {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  console.log(JSON.stringify(props.leaderBoardMeta));

  const navigate = (matchStarted: boolean) => {
    if (matchStarted) {
      // navigation.navigate('CompareTeamsScreen');
    } else {
      errorBox('Please wait till the match starts to view other teams', 100);
    }
  };
  if (!props.leaderBoardMeta || props.leaderBoardMeta.length === 0) {
    return <NoLeaderBoardContent />;
  }

  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <ShareContest />
      <HeaderLeaderBoard />
      {props.leaderBoardMeta.map((item: any, index: number) => {
        return (
          <HorizontalProfile
            key={index.toString()}
            image={'https://t.ly/ZGWf'}
            name={item[0].player_name}
            teamCode={item[0].team_key}
            currentUser={false}
            hasStatus={false}
            matchStarted={false}
            navigate={navigate}
          />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
