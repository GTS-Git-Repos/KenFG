import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import {TeamsCard} from '../../../../sharedComponents';
import {log} from '../../../../utils/logs';
import {updatePlayer} from '../../../../store/actions/teamActions';
import {creditsLeftCalculator} from '../../../../constructors/teams.constructor';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../../utils/snakBars';
import {useDispatch} from 'react-redux';

interface PropTypes {
  teams: any;
  status: string;
}

export default function MyTeamsPage(props: PropTypes) {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const navigateToPreview = (team_key: string) => {
    const team = props.teams.find((item: any) => item.team_key === team_key);
    if (team) {
      const credits_left = creditsLeftCalculator(
        team.keepers,
        team.batsman,
        team.all_rounder,
        team.bowler,
      );
      // return;
      navigation.navigate('TeamPreviewScreen', {
        from: 1,
        keepers: team.keepers,
        batsman: team.batsman,
        all_rounder: team.all_rounder,
        bowler: team.bowler,
        cap_key: team.cap.key,
        vc_key: team.vc.key,
        team_a: team.team_a,
        team_b: team.team_b,
        credits_left: credits_left,
      });
    } else {
      errorBox("Can't preview team !!");
    }

    // const obj = teamPreviewObjConstuctor(team);
  };

  const mutateTeam = (team_key: string) => {
    const team = props.teams.find((item: any) => item.team_key === team_key);
    const players = [];
    if (team) {
      // console.log(team.keepers);
      players.push(...team.keepers);
      players.push(...team.all_rounder);
      players.push(...team.batsman);
      players.push(...team.bowler);
      dispatch(updatePlayer(players));
      navigation.navigate('CreateTeamScreen', {
        from: 1,
      });
    }
  };

  if (!props.status) {
    return <TeamsLoading />;
  }
  if (props.status && !props.teams) {
    return <NoTeamsFound />;
  }
  return (
    <ScrollView contentContainerStyle={[tailwind('m-3')]}>
      {props.teams.map((item: any) => {
        return (
          <TeamsCard
            team_a={item.team_a}
            team_b={item.team_b}
            key={item.team_key}
            team_key={item.team_key}
            canModify={true}
            current={false}
            keepers={item.keepers}
            batsman={item.batsman}
            all_rounder={item.all_rounder}
            bowler={item.bowler}
            cap={item.cap}
            vc={item.vc}
            navigateToPreview={navigateToPreview}
            mutateTeam={mutateTeam}
          />
        );
      })}
      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}

const NoTeamsFound = () => {
  return (
    <Text
      style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
      No Teams Found
    </Text>
  );
};

const TeamsLoading = () => {
  return (
    <Text
      style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
      Please Wait ...
    </Text>
  );
};
