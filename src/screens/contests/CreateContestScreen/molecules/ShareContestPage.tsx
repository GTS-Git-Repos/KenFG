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
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {
  NoContentShared,
  ReferPeopleIcon,
  ShareIcon,
  SocialMediaShare,
} from '../../../../sharedComponents';
import ShareWebLink from './ShareWebLink';

interface PropTypes {
  pagerRef: any;
  activeIndex: number;
}

export default function ShareContestPage(props: PropTypes) {
  
  function actionPress() {
    props?.pagerRef?.current?.setPage(0);
  }

  const moreShareBtn = async () => {
    const result = await Share.share({
      message: 'Share this Contest',
    });
  };

  if (true) {
    return (
      <NoContentShared
        loading={false}
        text={'No Contests to share'}
        subtext="You did't create any contests yet"
        actionText={'Create a Contest'}
        actionPress={actionPress}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={[tailwind('bg-dark-3 px-4 py-4 ')]}>
      <TopSection />
      <InputTitle text="Copy Code" />
      <UserCode />
      <ReferContactsBtn />
      <SocialMediaShare />

      <View style={[tailwind('mt-3 mb-2')]}>
        <InputTitle text="Share WebLink" />
      </View>
      <ShareWebLink />
      <MoreButton moreShareBtn={moreShareBtn} />
    </ScrollView>
  );
}

const TopSection = () => {
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
  border: {
    borderColor: '#8797B1',
    borderRadius: 2,
    borderStyle: 'dashed',
    borderWidth: 1.3,
  },
});
