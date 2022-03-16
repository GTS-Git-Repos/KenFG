import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Image,
  Share,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NoDataContests, ContestCard} from '../../../../sharedComponents';
import assets from '../../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ReferPeopleIcon,
  ShareIcon,
  SocialMediaShare,
} from '../../../../sharedComponents';
import ShareWebLink from './ShareWebLink';

interface PropTypes {
  isFetching: boolean;
  userContests: Array<any>;
  selContest: null | any;
  pagerRef: any;
  activeIndex: number;
  onPressContestCard(contest_key: string): any;
  onPressShareContest(contest_key: string): any;
  proceedToJoin(contest_key: string): any;
}

export default function ShareContestPage(props: PropTypes) {
  function noContentAction() {
    props?.pagerRef?.current?.setPage(0);
  }
  if (props.userContests.length === 0 || props.isFetching) {
    return (
      <NoDataContests
        loading={props.isFetching}
        title={'No Contests to share'}
        subtitle={"You did't create any contests yet"}
        actionText={'CREATE CONTEST'}
        noContentAction={noContentAction}
        error={false}
        refetch={() => {}}
      />
    );
  }

  return (
    <View>
      {props.userContests.map((item: any) => {
        return (
          <View key={item.key} style={[styles.card]}>
            <View style={[{flex: 9, paddingRight: 8}]}>
              <ContestCard
                key={item.key}
                contest_key={item.key}
                match_key={item.match_key}
                title={item.title}
                filled_spots={item.filled_spots}
                total_spots={item.total_spots}
                occupaid_cent={0}
                entry={item.entry}
                amount_letters={item.prize.amount_letters}
                amount={item.prize.amount}
                guaranteed={item.guaranteed === 'yes'}
                max_entry={item.max_entry}
                bonus={item.bonus}
                is_practice={item.is_practice}
                contest_type={item.contest_type}
                onContestCardPress={props.onPressContestCard}
                proceedToJoin={props.proceedToJoin}
              />
            </View>

            <TouchableOpacity
              onPress={() => props.onPressShareContest(item.key)}
              style={[{flex: 1}]}>
              <Icon name="share-outline" size={40} color="#ffffff" />
              <Text style={[styles.shareTxt]}>Share</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    borderColor: '#8797B1',
    borderRadius: 2,
    borderStyle: 'dashed',
    borderWidth: 1.3,
  },
  shareTxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 8,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
