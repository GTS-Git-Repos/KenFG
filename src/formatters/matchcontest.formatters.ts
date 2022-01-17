export const groupAllContestsAPIRmeote = (payload: any) => {
  try {
    const paid = payload.filter((item: any) => item.contest_type === 'public');
    const practice = payload.filter(
      (item: any) => item.contest_type === 'practice',
    );
    if (paid.length === 0 && practice.length === 0) {
      throw 'no contest found';
    }
    return [...paid, ...practice];
  } catch (err) {
    console.log('groupAllContestsAPIRmeote', err);
    return false;
  }
};

export const extractJoinedContestAPIResponse = (payload: any) => {
  try {
    const contestsdata = payload.slice(0, payload.length - 1);
    const teams = payload[payload.length - 1];

    if (contestsdata.length === 0) {
      throw 'no joined contests';
    }
    const contests = [];
    for (const item of contestsdata) {
      const contestMeta = {...item, contest_team: item.contest_team.split(',')};

      const joinedTeam = [];
      for (const team of contestMeta.contest_team) {
        const teamMeta = teams.find((item: any) => item.teams_key == team);

        if (teamMeta) {
          const allPlayers = teamMeta.players.players;
          const t_cap = allPlayers.find(
            (item: any) => item.key === teamMeta.players.cap_key,
          );
          const t_vc = allPlayers.find(
            (item: any) => item.key === teamMeta.players.vc_key,
          );
          joinedTeam.push({
            teamCode: team,
            t_cap: t_cap,
            t_vc: t_vc,
            team_a: teamMeta.team_a,
            team_b: teamMeta.team_b,
            allPlayers,
          });
        }
      }
      contests.push({
        contestMeta,
        joinedTeam,
      });
    }

    return contests;
  } catch (err) {
    console.log('extractJoinedContestAPIResponse', err);
    return false;
  }
};
