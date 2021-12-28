export const normalizeUpcommingMatchesAPI = (response: any) => {
  try {
    let formatted = response.matches.map((item: any) => {
      var splited = item.teams.start_at.split(/[- :]/);
      var date = new Date(
        Date.UTC(
          splited[0],
          splited[1] - 1,
          splited[2],
          splited[3],
          splited[4],
          splited[5],
        ),
      );
      return {...item, start_at: date};
    });
    return formatted;
  } catch (err) {
    console.log(err);
    return [];
  }
};
