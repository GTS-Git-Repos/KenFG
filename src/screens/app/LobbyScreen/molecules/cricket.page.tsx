import React from 'react';
import tailwind from '../../../../../tailwind';
import {View} from 'react-native';
import UpcommingMatchTitle from './upcomming.match.title';
import ImageSlider from './ImageSlider';
import UpComingMatchesSlider from './UpComingMatchesSlider';
import {useNavigation} from '@react-navigation/native';
import {
  navigateMatchContestsAction,
  toSecondInningsContestList,
} from '../../../../store/actions/navigationActions';
import {errorBox} from '../../../../utils/snakBars';

interface PropTypes {
  isFullMatch: boolean;
  banners: Array<any>;
  upcomming: Array<any>;
  notificationSheet: any;
  onPressNotification(match_key: string): void;
  onPressMatchType(match_type: number): void;
}

export default function CricketPage(props: PropTypes) {
  const navigation = useNavigation();

  const navigateToMatchContests = (match_key: string) => {
    const match = props.upcomming.find((item: any) => item.key === match_key);
    if (match) {
      const obj = {
        match_key: match.key,
        name: match.teams.tournament.short_name,
        team_a: match.teams.a.key,
        team_b: match.teams.b.key,
        team_a_name: match.teams.a.name,
        team_b_name: match.teams.b.name,
        start_at: match.start_at,
      };
      if (props.isFullMatch) {
        navigateMatchContestsAction(navigation, obj);
      } else {
        toSecondInningsContestList(navigation, obj);
      }
    } else {
      errorBox('No Match Found', 200);
    }
  };

  return (
    <View>
      <View style={[tailwind('pt-3')]}>
        <ImageSlider
          upcomming={props.upcomming}
          data={props.banners}
          navigateToMatchContests={navigateToMatchContests}
        />
      </View>
      <View style={[tailwind('px-5 pt-4')]}>
        <UpcommingMatchTitle
          isFullMatch={props.isFullMatch}
          onPressMatchType={props.onPressMatchType}
        />
      </View>
      <UpComingMatchesSlider
        data={props.upcomming}
        status={props.upcomming}
        navigateToMatchContests={navigateToMatchContests}
        notificationSheet={props.notificationSheet}
        onPressNotification={props.onPressNotification}
      />
    </View>
  );
}
