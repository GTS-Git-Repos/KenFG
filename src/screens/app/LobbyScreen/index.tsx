import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import LobbyScreenLoading from './components/lobbyscreen.loading';
import LobbyScreen from './lobby.screen';
import {useLobbyMeta} from './lobby.workers';

export default function LobbyScreenHOC() {
  const userSelector = useSelector(userInfo);
  const {lobbyMeta, lobbyAPI}: any = useLobbyMeta(userSelector.mobile);

  if (!lobbyAPI) {
    return <LobbyScreenLoading failed={false} />;
  }
  if (lobbyAPI && !lobbyMeta) {
    return <LobbyScreenLoading failed={true} />;
  }
  // return null;
  return (
    <LobbyScreen
      myMatches={
        lobbyMeta.myMatches.length > 0 ? lobbyMeta.myMatches[0] : false
      }
      banners={lobbyMeta.banners}
      upcomming={lobbyMeta.upcomming}
    />
  );
}
