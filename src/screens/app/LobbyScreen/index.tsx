import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'tailwind-rn';
import {FlatList, View} from 'react-native';
import {updateFullMatchAction} from '../../../store/actions/appActions';
import {
  userInfo,
  isFulMatchSelector,
  appColorsSelector,
} from '../../../store/selectors';
import LobbyScreenLoading from './atoms/lobbyscreen.loading';
import LobbyScreen from './lobby.screen';
import {useLobbyMeta} from './lobby.controller';
import {Modalize} from 'react-native-modalize';
import MatchNotificationHead from './atoms/math.notification.head';
import MatchNotificationSheet from './molecules/matchNotificationSheet';

export default function LobbyScreenHOC() {
  const dispatch = useDispatch();
  const notificationSheet = useRef<Modalize>(null);
  const appColors = useSelector(appColorsSelector);
  const userSelector = useSelector(userInfo);
  const isFullMatch = useSelector(isFulMatchSelector);

  // match info will be stored when notification initiated
  const matchInfo = useRef<any>(null);

  const {lobbyMeta, lobbyAPI, lobbyLive, refetchlobby}: any = useLobbyMeta(
    userSelector.mobile,
    isFullMatch,
  );

  function onPressNotification(match_key: string) {
    const match = lobbyMeta.upcomming.find(
      (item: any) => item.key === match_key,
    );
    if (match) {
      matchInfo.current = match;
      console.log(match);
    }
    notificationSheet.current?.open();
  }

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
    <View style={[tailwind('h-full')]}>
      <FlatList
        refreshing={false}
        onRefresh={() => refetchlobby()}
        ListHeaderComponent={() => {
          return (
            <>
              <LobbyScreen
                myMatches={
                  lobbyMeta.myMatches.length > 0
                    ? lobbyMeta.myMatches[0]
                    : false
                }
                banners={lobbyMeta.banners}
                upcomming={lobbyMeta.upcomming}
                isFullMatch={isFullMatch}
                appColors={appColors}
                onPressMatchType={onPressMatchType}
                onPressNotification={onPressNotification}
              />
            </>
          );
        }}
        data={[]}
        renderItem={() => <></>}
      />
      {/* Match notification Modal */}
      <Modalize
        ref={notificationSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        HeaderComponent={
          <MatchNotificationHead notificationSheet={notificationSheet} />
        }>
        <MatchNotificationSheet matchInfo={matchInfo} />
      </Modalize>
    </View>
  );
}
