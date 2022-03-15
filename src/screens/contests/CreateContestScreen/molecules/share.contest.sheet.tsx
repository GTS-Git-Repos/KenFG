import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinkIcon} from '../../../../assets/newIcons';
import assets from '../../../../constants/assets_manifest';
import { CloneIcon,CopyIcon } from '../../../../sharedComponents';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  contest_code: string;
  shareViaSMS(): void;
  shareSocialMedia(): void;
}

export default function ShareContestSheet(props: PropTypes) {
  console.log(tailwind('font-regular text-dark-1 font-14 pb-1'));

  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[ss.root]}>
      <Text style={[ss.title]}>Invite Friends</Text>
      <View style={ss.frcc}>
        <Image
          resizeMode="contain"
          source={assets.shareToFriends}
          style={[ss.sImage]}
        />
      </View>
      <Text style={[ss.subTitle]}>Copy Code</Text>
      <View style={[ss.codeContainer]}>
        <Text style={[ss.title]}>345356734</Text>
        <TouchableOpacity>
          <LinkIcon dT={true} />
        </TouchableOpacity>
      </View>
      <Text style={[ss.or]}>OR</Text>
      <Text style={[ss.subTitle]}>Share web link</Text>

      <View style={[ss.linkContainer]}>
        <Text style={[ss.linktxt]}>kenfg.in/invite/345356734</Text>
        <TouchableOpacity>
          <CloneIcon dT={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const ss = StyleSheet.create({
  root: {
    backgroundColor: '#0c1320',
    padding: 16,
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
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
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    paddingBottom: 4,
  },
  or: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingTop: 4,
    textAlign: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 12,
    borderColor: '#8797B15D',
    borderRadius: 5,
    borderWidth: 1.3,
  },
  linktxt: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-normal',
    fontSize: 12,
  },
});
