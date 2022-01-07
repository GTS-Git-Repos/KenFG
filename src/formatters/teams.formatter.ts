export const splitJoinedTeamsResponse = (payload: any) => {
  try {
    const teams = payload.teams;
    const teamData = [];
    for (let team of teams) {
      const captain = team.players.find((item: any) => item.captain === true);
      const viceCaptain = team.players.find((item: any) => item.vc === true);
      const keepers = team.players.filter(
        (item: any) => item.seasonal_role === 'keeper',
      );
      const batsman = team.players.filter(
        (item: any) => item.seasonal_role === 'batsman',
      );
      const all_rounder = team.players.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      );
      const bowler = team.players.filter(
        (item: any) => item.seasonal_role === 'bowler',
      );
      teamData.push({
        team_key: team.teams_key,
        captain,
        viceCaptain,
        keepers,
        batsman,
        all_rounder,
        bowler,
      });
    }
    return teamData;
  } catch (err) {
    console.log('<splitJoinedTeamsResponse>', err);

    return false;
  }
};
