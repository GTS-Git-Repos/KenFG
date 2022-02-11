import React from 'react';
import ProfileEditScreen from './profile.edit.screen';
import {updateEnableDarkMode} from '../../../store/actions/appActions';
import {useDispatch, useSelector} from 'react-redux';

export default function ProfileEditHOC() {
  const dispatch = useDispatch();
  const darkModeState = useSelector<any>(state => state.app.darkModeEnabled);

  function onColorThemePress() {
    dispatch(updateEnableDarkMode(!darkModeState));
  }

  return (
    <ProfileEditScreen
      darkModeState={darkModeState}
      onColorThemePress={onColorThemePress}
    />
  );
}
