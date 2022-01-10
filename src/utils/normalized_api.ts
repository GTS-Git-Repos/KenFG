import {covertInputTimeStringToDate} from './comman';

export const normalizeUpcommingMatchesAPI = (response: any) => {
  try {
    const formatted = response.matches.map((item: any) => {
      return {
        ...item,
        start_at: covertInputTimeStringToDate(item.teams.start_at),
      };
    });
    return formatted;
  } catch (err) {
    console.log(err);
    return [];
  }
};
