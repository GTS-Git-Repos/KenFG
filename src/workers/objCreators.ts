import store from '../store/';
export const createTeamObjCreator = () => {
  const UserInfo = store.getState().user.user_info;
  const Players = store.getState().team.players;
  const captain = store.getState().team.cap_key;
  const vc = store.getState().team.vc_key;

  let finalPlayers: any = [];

  Players.forEach((item: any) => {
    if (item.key === captain) {
      finalPlayers.push({
        ...item,
        captain: true,
        vc: false,
      });
    }
    if (item.key === vc) {
      finalPlayers.push({
        ...item,
        captain: false,
        vc: true,
      });
    } else {
      finalPlayers.push({
        ...item,
        captain: true,
        vc: true,
      });
    }
  });

  return {
    match_key: '123',
    contest_key: '123',
    player_key: UserInfo?.mobile ? UserInfo.mobile : '9876543210',
    access_key: UserInfo?.mobile ? UserInfo.mobile : '9876543210',
    players: finalPlayers,
  };
};
