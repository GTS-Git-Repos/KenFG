import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, useWindowDimensions, Text, ScrollView} from 'react-native';
import HeaderLeaderBoard from '../atoms/HeaderLeaderBoard';
import {HorizontalProfile} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../../utils/snakBars';
import ShareContest from '../atoms/ShareContest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  data?: [];
}

export default function LearderBoard(props: PropTypes) {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  const navigate = (matchStarted: boolean) => {
    if (matchStarted) {
      // navigation.navigate('CompareTeamsScreen');
    } else {
      errorBox('Please wait till the match starts to view other teams', 100);
    }
  };

  const leaderBoardMock = [
    {
      name: 'Player 1',
      teamCode: 'T3',
    },
    {
      name: 'Player 2',
      teamCode: 'T1',
    },
    {
      name: 'Player 3',
      teamCode: 'T2',
    },
    {
      name: 'Player 4',
      teamCode: 'T3',
    },
    {
      name: 'Player 5',
      teamCode: 'T1',
    },
  ];

  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <ShareContest />
      <HeaderLeaderBoard />
      {leaderBoardMock.map((item: any, index: number) => {
        return (
          <HorizontalProfile
            key={index.toString()}
            image={'https://t.ly/ZGWf'}
            name={item.name}
            teamCode={item.teamCode}
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
