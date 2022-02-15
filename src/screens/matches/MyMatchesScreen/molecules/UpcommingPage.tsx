import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import MyMatchesCard from '../../../app/LobbyScreen/molecules/mymatch.card.lobby';
import NoContest from '../atoms/no.contest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  selectedTab: any;
  matches: any;
  matchesAPI: any;
  onPressMyMatchCard(match_key: string): any;
}

export default function UpcommingPage(props: PropTypes) {
  const navigation = useNavigation<any>();

  const navigate = () => {
    navigation.navigate('LiveMatchScreen');
  };

  if (!props.matchesAPI || props.selectedTab !== 0) {
    return <NoContest text={''} actionText={''} loading={true} />;
  }

  if (props.matchesAPI && (!props.matches || props.matches?.length === 0)) {
    return (
      <NoContest
        text={"You haven't joined any contests"}
        actionText={'View Upcomming Matches'}
        loading={false}
      />
    );
  }

  return (
    <View style={[tailwind('mx-3')]}>
      {props.matches.map((item: any) => {
        return (
          <View style={[tailwind('my-2')]} key={item.key}>
            <MyMatchesCard
              match_key={item.key}
              team_a={item.teams.a}
              team_b={item.teams.b}
              tournament_name={item.teams.tournament.short_name}
              start_time={item.start_at}
              teamCount={item.team_count}
              contestCount={item.contest_count}
              onPressMyMatchCard={props.onPressMyMatchCard}
              status={item.status}
            />
          </View>
        );
      })}
    </View>
  );
}
