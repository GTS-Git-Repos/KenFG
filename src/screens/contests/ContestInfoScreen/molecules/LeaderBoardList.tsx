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
  index: number;
  activeIndex: number;
  ldbLive: boolean;
  ldbMeta: any;
  ldbErr: boolean;
}

export default function LearderBoard(props: PropTypes) {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  // console.log(JSON.stringify(props.leaderBoardMeta));

  const navigate = (matchStarted: boolean) => {
    if (matchStarted) {
      // navigation.navigate('CompareTeamsScreen');
    } else {
      errorBox('Please wait till the match starts to view other teams', 100);
    }
  };
  if (props.ldbErr) {
    return <NoLeaderBoardContent loading={false} error={true} />;
  }
  if (!props.ldbMeta) {
    return <NoLeaderBoardContent loading={true} error={false} />;
  }

  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <ShareContest />
      <HeaderLeaderBoard />
      {props.ldbMeta.map((item: any, index: number) => {
        return (
          <HorizontalProfile
            key={index.toString()}
            image={'https://t.ly/ZGWf'}
            name={item.player_name}
            teamCode={item.team_key}
            currentUser={item.is_current}
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
