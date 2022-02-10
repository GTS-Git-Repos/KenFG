import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {UserMetaType} from '../../../types/user';
import {userInfo} from '../../../store/selectors';
import AccountProfileScreen from './account.profile.screen';
import {useImageUpload} from '../../../shared_hooks/app.hooks';

export default function AccountProfileHOC() {
  const moreOptionSheet = useRef(null);
  const {openLibrary} = useImageUpload();

  const userMeta: UserMetaType = useSelector(userInfo);

  const imageUpload = () => {
    openLibrary();
  };
  // console.log(userMeta);

  return (
    <AccountProfileScreen
      moreOptionSheet={moreOptionSheet}
      userMeta={userMeta}
      imageUpload={imageUpload}
    />
  );
}
