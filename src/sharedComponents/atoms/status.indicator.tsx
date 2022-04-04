/**
 * used in match screen all tabs, UI for loading and error state
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import SecondaryButton from './secondaryButton';

interface PropTypes {
  loading: boolean;
  error: boolean;
}

export default function StatusIndicator(props: PropTypes) {
  if (props.error) {
    return (
      <View style={[ss.errorC]}>
        <View style={[{alignItems: 'center'}]}>
          <Icon name="cloud-offline-outline" size={100} color="white" />
        </View>
        <Text style={ss.errTitle}>Failed to retrive data</Text>
        <Text style={ss.errTxt}>
          Please check your internet connection and try again
        </Text>
        <TouchableOpacity style={[ss.btn]}>
          <SecondaryButton text={'Try again'} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={[ss.container]}>
      <ActivityIndicator size="large" color="#B2933D" />
    </View>
  );
}

const ss = StyleSheet.create({
  container: {
    padding: 40,
  },
  errorC: {
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  errTitle: {
    fontFamily: 'Gadugi-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  errTxt: {
    paddingVertical: 16,
    fontFamily: 'Gadugi-Normal',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    marginTop: 20,
  },
});
