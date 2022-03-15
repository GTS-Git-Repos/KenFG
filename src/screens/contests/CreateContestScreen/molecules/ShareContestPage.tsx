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

  const moreShareBtn = async () => {
    const result = await Share.share({
      message: 'Share this Contest',
    });
  };

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

  if (props.selContest === null) {
    // list all contests created by user
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
                <Icon name="share" size={40} color="#d1b45a" />
                <Text style={[styles.shareTxt]}>Share</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <Text style={[tailwind('font-regular text-white font-15')]}>Disabled</Text>
  );
  // return (
  //   <ScrollView contentContainerStyle={[tailwind('bg-dark-3 px-4 py-4 ')]}>
  //     <TopSection />
  //     <InputTitle text="Copy Code" />
  //     <UserCode />
  //     <ReferContactsBtn />
  //     <SocialMediaShare />

  //     <View style={[tailwind('mt-3 mb-2')]}>
  //       <InputTitle text="Share WebLink" />
  //     </View>
  //     <ShareWebLink />
  //     <MoreButton moreShareBtn={moreShareBtn} />
  //   </ScrollView>
  // );
}

const TopSection = () => {
  return null
  return (
    <>
      <Text style={[tailwind('font-bold text-center text-white font-13')]}>
        Invite Friends
      </Text>
      <View style={[tailwind('flex-row items-center justify-center')]}>
        <Image
          resizeMode="contain"
          source={assets.shareToFriends}
          style={[{width: 182, height: 75}]}
        />
      </View>
    </>
  );
};

const InputTitle = (props: any) => {
  return (
    <Text style={[tailwind('font-regular text-dark-1 font-14 pb-1')]}>
      {props.text}
    </Text>
  );
};

function UserCode(props: any) {
  return null
  return (
    <View
      style={[tailwind('flex-row items-center p-3 my-2 mb-4'), styles.border]}>
      <View style={[tailwind('px-1'), {flex: 8}]}>
        <Text style={[tailwind('font-bold text-light font-14')]}>
          345356734
        </Text>
      </View>
      <View style={[tailwind('flex-row justify-end'), {flex: 2}]}>
        <Image
          resizeMode="contain"
          source={assets.link}
          style={[tailwind(''), {width: 20, height: 20}]}
        />
      </View>
    </View>
  );
}

function ReferContactsBtn() {
  return (
    <View
      style={[
        tailwind('rounded bg-green flex-row items-center justify-center'),
        {paddingVertical: 14, marginBottom: 16},
      ]}>
      <ReferPeopleIcon />
      <Text
        style={[tailwind('font-regular font-14 px-3 uppercase text-white')]}>
        Invite Via SMS
      </Text>
    </View>
  );
}

function MoreButton(props: any) {
  return (
    <TouchableOpacity
      onPress={props.moreShareBtn}
      style={[
        tailwind(
          'rounded flex-row items-center border border-gray-700 my-4 justify-center',
        ),
        {paddingVertical: 14, marginBottom: 16},
      ]}>
      <ShareIcon />
      <Text
        style={[tailwind('font-regular font-14 px-3 uppercase text-white')]}>
        More Options
      </Text>
    </TouchableOpacity>
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
