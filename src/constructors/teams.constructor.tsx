/**
 * teams utils
 */

// perform a transformations for get match players api, for ease of use

export const normalizeGetPlayersAPI = (payload: any) => {
  try {
    let keep = [];
    let bat = [];
    let ar = [];
    let bowl = [];

    for (const player of payload) {
      const playerObj = {...player};

      // normalize selected percent data
      // playerObj.sel = playerObj.stat.sel;
      // playerObj.selCap = playerObj.stat.cap;
      // playerObj.selVc = playerObj.stat.vc;

      // mock data
      playerObj.sel = Math.floor(Math.random() * 100);
      playerObj.selCap = Math.floor(Math.random() * 100);
      playerObj.selVc = Math.floor(Math.random() * 100);

      // del the unneeded data
      delete playerObj.stat;

      if (playerObj.seasonal_role === 'keeper') {
        keep.push({
          ...playerObj,
        });
      }
      if (playerObj.seasonal_role === 'batsman') {
        bat.push({
          ...playerObj,
        });
      }
      if (playerObj.seasonal_role === 'all_rounder') {
        ar.push({
          ...playerObj,
        });
      }
      if (playerObj.seasonal_role === 'bowler') {
        bowl.push({
          ...playerObj,
        });
      }
    }
    // console.log('>>', JSON.stringify(keep));
    // const keeper = payload.filter(
    //   (item: any) => item.seasonal_role === 'keeper',
    // );

    // const batsman = payload.filter(
    //   (item: any) => item.seasonal_role === 'batsman',
    // );
    // const all_rounder = payload.filter(
    //   (item: any) => item.seasonal_role === 'all_rounder',
    // );
    // const bowler = payload.filter(
    //   (item: any) => item.seasonal_role === 'bowler',
    // );

    return [{keeper: keep, batsman: bat, all_rounder: ar, bowler: bowl}];
  } catch (err) {
    console.log('normalizeGetPlayersAPI -->', err);
    return false;
  }
};

export const creditsLeftCalculator = (
  keepers: Array<any>,
  batsman: Array<any>,
  all_rounder: Array<any>,
  bowler: Array<any>,
) => {
  try {
    const keepersCredits = keepers.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const batsmanCredits = batsman.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const allRounderCredits = all_rounder.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const bowlerCredits = bowler.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const sum =
      keepersCredits + batsmanCredits + allRounderCredits + bowlerCredits;
    return 100 - sum;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
