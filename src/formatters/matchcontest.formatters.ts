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
    if (contestsdata.length === 0) {
      throw 'no joined contests';
    }

    const teams = payload[payload.length - 1];
    const contests = contestsdata.map((item: any) => {
      return {
        ...item,
        contest_team: item.contest_team.split(','),
      };
    });

    return {
      contests,
      teams,
    };
  } catch (err) {
    console.log('extractJoinedContestAPIResponse', err);
    return false;
  }
};
