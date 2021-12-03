import React from 'react';
import tailwind from '../../../../tailwind';
import {View, useWindowDimensions, Text, ScrollView} from 'react-native';
import HeaderLeaderBoard from '../atoms/HeaderLeaderBoard';
import {HorizontalProfile} from '../../../sharedComponents/';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  data?: [];
}

export default function LearderBoard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <HeaderLeaderBoard />
      <HorizontalProfile
        image={'https://t.ly/ZGWf'}
        name={'Naveen 98758'}
        teamCode={'T3'}
        points={876}
        rank={37}
        up={true}
        currentUser={true}
      />
      <HorizontalProfile
        image={'https:picsum.photos/300'}
        name={'Some Name'}
        teamCode={'T3'}
        points={34}
        rank={45}
        up={false}
        currentUser={false}
      />
      <HorizontalProfile
        image={'https:picsum.photos/100'}
        name={'The Long Name of someone'}
        teamCode={'T3'}
        points={34}
        rank={45}
        up={true}
        currentUser={false}
      />
      <HorizontalProfile
        image={'https://t.ly/ZGWf'}
        name={'Naveen 98758'}
        teamCode={'T3'}
        points={876}
        rank={37}
        up={false}
        currentUser={false}
      />
      <HorizontalProfile
        image={'https:picsum.photos/300'}
        name={'Jessie'}
        teamCode={'T3'}
        points={34}
        rank={45}
        up={true}
      />
      <View style={[tailwind("h-20")]}>
         
      </View>
    </ScrollView>
  );
}
