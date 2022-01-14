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
      navigation.navigate('CompareTeamsScreen');
    } else {
      errorBox('Please wait till the match starts to view other teams');
    }
  };

  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <ShareContest />
      <HeaderLeaderBoard />
      <HorizontalProfile
        image={'https://t.ly/ZGWf'}
        name={'Naveen 98758'}
        teamCode={'T3'}
        currentUser={true}
        hasStatus={false}
        matchStarted={false}
        navigate={navigate}
      />
      <HorizontalProfile
        image={'https:picsum.photos/300'}
        name={'Some Name'}
        teamCode={'T3'}
        currentUser={false}
        hasStatus={false}
        matchStarted={false}
        navigate={navigate}
      />
      <HorizontalProfile
        image={'https:picsum.photos/100'}
        name={'The Long Name of someone'}
        teamCode={'T3'}
        currentUser={false}
        hasStatus={false}
        matchStarted={false}
        navigate={navigate}
      />
      <HorizontalProfile
        image={'https://t.ly/ZGWf'}
        name={'Naveen 98758'}
        teamCode={'T3'}
        currentUser={false}
        hasStatus={false}
        matchStarted={false}
        navigate={navigate}
      />
      <HorizontalProfile
        image={'https:picsum.photos/300'}
        name={'Jessie'}
        teamCode={'T3'}
        currentUser={false}
        hasStatus={false}
        matchStarted={false}
        navigate={navigate}
      />
      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
