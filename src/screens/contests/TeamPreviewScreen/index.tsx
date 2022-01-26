import React from 'react';
import {ToastAndroid} from 'react-native';
import TeamPreviewScreen from './team.preview.screen';

export default function TeamPreViewHOC() {
  function onPressPlayerProfile(player_key: string) {
    ToastAndroid.show(
      'Points will gets updated once match starts',
      ToastAndroid.SHORT,
    );
  }

  return <TeamPreviewScreen onPressPlayerProfile={onPressPlayerProfile} />;
}
