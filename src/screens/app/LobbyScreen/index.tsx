import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateFullMatchAction} from '../../../store/actions/appActions';
import {
  userInfo,
  isFulMatchSelector,
  appColorsSelector,
} from '../../../store/selectors';
import LobbyScreenLoading from './atoms/lobbyscreen.loading';
import LobbyScreen from './lobby.screen';
import {useLobbyMeta} from './lobby.controller';

export default function LobbyScreenHOC() {
  const dispatch = useDispatch();
  const appColors = useSelector(appColorsSelector);
  const userSelector = useSelector(userInfo);
  const isFullMatch = useSelector(isFulMatchSelector);
  const {lobbyMeta, lobbyAPI, lobbyLive}: any = useLobbyMeta(
    userSelector.mobile,
    isFullMatch,
  );

  const onPressMatchType = (match_type: number) => {
    dispatch(updateFullMatchAction(match_type === 1 ? true : false));
  };

  if (!lobbyAPI) {
    return <LobbyScreenLoading failed={false} />;
  }
  if (lobbyAPI && !lobbyMeta) {
    return <LobbyScreenLoading failed={true} />;
  }
  return (
    <LobbyScreen
      myMatches={
        lobbyMeta.myMatches.length > 0 ? lobbyMeta.myMatches[0] : false
      }
      banners={lobbyMeta.banners}
      upcomming={lobbyMeta.upcomming}
      isFullMatch={isFullMatch}
      appColors={appColors}
      onPressMatchType={onPressMatchType}
    />
  );
}
