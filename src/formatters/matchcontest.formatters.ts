export const groupAllContestsAPIRmeote = (payload: any) => {
  try {
    const paid = payload.filter((item: any) => item.contest_type === 'public');
    const practice = payload.filter(
      (item: any) => item.contest_type === 'practice',
    );
    return [...paid, ...practice];
  } catch (err) {
    console.log('groupAllContestsAPIRmeote', err);
    return false;
  }
};

export const extractJoinedContestAPIResponse = (payload: any) => {
  try {
    const players = payload[payload.length - 1];
    console.log(players);
  } catch (err) {
    console.log('groupAllContestsAPIRmeote', err);
    return false;
  }
};
