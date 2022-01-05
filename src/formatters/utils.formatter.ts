export const getTeamByInningsKey = (innings_key: string) => {
  return innings_key.split('-')[1];
};
