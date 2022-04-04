import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinkIcon} from '../../../../assets/newIcons';
import assets from '../../../../constants/assets_manifest';

import {
  CloneIcon,
  ReferPeopleIcon,
  ShareIcon,
} from '../../../../sharedComponents';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  contest_code: string;
  onPressCopy(contest_key: string, type: string): any;
  onPressSMSShare(): void;
  onPressMoreShare(): void;
  dT: boolean;
}

export default function ShareContestSheet(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgw]}>
      <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Invite Friends</Text>
      <View style={ss.frcc}>
        <Image
          resizeMode="contain"
          source={assets.shareToFriends}
          style={[ss.sImage]}
        />
      </View>
      <Text style={[ss.subTitle, dT ? clr.td2 : clr.td1]}>Copy Code</Text>

      <TouchableOpacity
        onPress={() => props.onPressCopy(props.contest_code, 'code')}
        style={[ss.codeContainer]}>
        <Text style={[ss.title, dT ? clr.td2 : clr.td1]}>
          {props.contest_code}
        </Text>
        <LinkIcon dT={dT} />
      </TouchableOpacity>

      <Text style={[ss.or, dT ? clr.td2 : clr.td1]}>OR</Text>
      <Text style={[ss.subTitle, dT ? clr.td2 : clr.td1]}>Share web link</Text>

      <TouchableOpacity
        onPress={() => props.onPressCopy(props.contest_code, 'link')}
        style={[ss.linkContainer]}>
        <Text style={[ss.linktxt, dT ? clr.td2 : clr.td1]}>
          kenfg.com/invite/{props.contest_code}
        </Text>
        <CloneIcon dT={dT} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressSMSShare} style={[ss.smsbtn]}>
        <ReferPeopleIcon />
        <Text style={[ss.btntxt]}>Invite Via SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPressMoreShare}
        style={[ss.moreBtn, dT ? clr.bgd2 : clr.bgGray]}>
        <ShareIcon />
        <Text style={[ss.btntxt, dT ? clr.td2 : clr.td1]}>
          Share on Social Media
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    padding: 16,
    borderRadius: 12,
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Gadugi-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  frcc: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sImage: {
    width: 182,
    height: 75,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 12,
    borderColor: '#8797B15D',
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1.3,
  },
  subTitle: {
    color: '#8797B1',
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
    paddingBottom: 4,
  },
  or: {
    color: '#8797B1',
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    paddingTop: 4,
    textAlign: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 12,
    borderColor: '#8797B15D',
    borderRadius: 5,
    borderWidth: 1,
  },
  linktxt: {
    color: '#FFFFFF',
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
  },
  smsbtn: {
    alignItems: 'center',
    backgroundColor: '#00513B',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 16,
  },
  moreBtn: {
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 16,
    borderColor: '#8797B14D',
    borderWidth: 1,
  },
  btntxt: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
    paddingHorizontal: 12,
    textTransform: 'uppercase',
  },
});
