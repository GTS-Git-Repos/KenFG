import store from '../store/';
const log = console.log;

export function isPlayerCanBeSelectable(allplayers: any, player: any) {
  const maxwkt = 2;
  const max_bat = 2;
  const max_bwl = 2;
  const max_ar = 2;

  const teamState = store.getState().team;

  //   console.log('TeamState', teamState);

  try {
    // is user have enough credits
    if (teamState.credits_left < player.credits) {
      throw 'Not Enough Credits';
    }
    // is player team have a slot
    if (teamState.team_count[player['nationality_short_code']].length > 7) {
      throw 'Maxium 7 members per team only';
    }
    // is player role have a slot
    console.log('player role', player.seasonal_role);
  } catch (err) {
    return {
      result: false,
      message: typeof err === 'string' ? err : 'failed',
    };
  }
}
