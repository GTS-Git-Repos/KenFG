import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  navigateToTeamPreviewScreeen(): any;
  navigateToCapSelection(): any;
}

export default function BottomAction(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root]}>
      <TouchableOpacity
        onPress={props.navigateToTeamPreviewScreeen}
        style={[ss.teamPreview, dT ? clr.bgd2 : clr.bgw]}>
        <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Team Preview</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.navigateToCapSelection}
        style={[ss.continue, dT ? clr.bgGreen : clr.bgLgreen]}>
        <Text style={[ss.txt, clr.tw]}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamPreview: {
    borderColor: '#006A4D',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    margin: 8,
    borderRadius: 4,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  continue: {
    borderColor: '#006A4D',
    borderWidth: 1,
    paddingHorizontal: 32,
    paddingVertical: 12,
    margin: 8,
    borderRadius: 4,
  },
});
