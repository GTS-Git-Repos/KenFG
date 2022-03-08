import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UserMetaType} from '../../../types/user';
import {updateUserInfo} from '../../../store/actions/userAction';
import {userInfo} from '../../../store/selectors';
import AccountProfileScreen from './account.profile.screen';
import {useImageUpload} from '../../../shared_hooks/app.hooks';
import {uploadUserProfileImageRemote} from '../../../remote/userRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';

export default function AccountProfileHOC() {
  const moreOptionSheet: any = useRef(null);
  const dispatch = useDispatch();
  const {image, openLibrary} = useImageUpload();

  const userMeta: UserMetaType = useSelector(userInfo);

  // local states
  const [loading, setLoading] = useState(false);

  const imageUpload = () => {
    openLibrary();
  };

  useEffect(() => {
    if (image) {
      (async () => {
        console.log('image is loaded');
        moreOptionSheet?.current?.close();
        await uploadImage();
      })();
    }
  }, [image]);

  async function uploadImage() {
    const photo: any = {
      uri: image.path,
      type: image.mime,
      name: `${userMeta.mobile}-profile.jpg`,
    };
    const formData = new FormData();
    formData.append('player_key', userMeta.mobile);
    formData.append('file', photo);
    setLoading(true);
    const response = await uploadUserProfileImageRemote(formData);
    setLoading(false);
    if (!response) {
      errorBox('Failed to update profile', 500);
    }
    dispatch(updateUserInfo(userMeta.mobile));
    infoBox('Image uploaded', 500);
  }

  return (
    <AccountProfileScreen
      moreOptionSheet={moreOptionSheet}
      userMeta={userMeta}
      imageUpload={imageUpload}
      loading={loading}
    />
  );
}
