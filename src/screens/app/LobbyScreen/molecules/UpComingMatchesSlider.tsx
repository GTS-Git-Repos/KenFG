import React from 'react';
import tailwind from '../../../../../tailwind';
import UpCommingMatchesCard from '../atoms/UpCommingMatchesCard';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface PropTypes {
  data: any;
  status: any;
  notificationSheet: any;
  onPressNotification(match_key: string): void;
  navigateToMatchContests(match_key: string): any;
}

export default function UpComingMatchesSlider(props: PropTypes) {
  if (props.status === 'loading') {
    return <Text style={styles.infoText}>Loading ...</Text>;
  }
  if (props.status === 'success' && !props.data) {
    return <Text style={styles.infoText}>No Upcomming Matches</Text>;
  }

  return (
    <View style={[tailwind('flex-row pt-1 px-1 flex-wrap')]}>
      {props.data.map((item: any) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigateToMatchContests(item.key)}
            key={item.key}
            style={[tailwind('w-6/12')]}>
            <UpCommingMatchesCard
              match_key={item.key}
              tournament_name={item?.teams?.tournament?.name}
              team_a_name={item?.teams?.a?.code}
              team_a_flag={item.teams.a.a_flag}
              team_b_name={item?.teams?.b?.code}
              team_b_flag={item.teams.b.b_flag}
              tournament_shortName={item?.teams?.tournament?.short_name}
              price={item?.teams?.price}
              start_at={item.start_at}
              onPressNotification={props.onPressNotification}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    color: '#f5feff',
    fontFamily: 'gadugi-normal',
    fontSize: 15,
    textAlign: 'center',
  },
});
