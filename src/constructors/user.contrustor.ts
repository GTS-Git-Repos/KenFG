// API normalization and obj contruction related to user will be here
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {covertInputTimeStringToDate} from '../utils/comman';

export function normalizeNotificationAPI(payload: Array<any>) {
  try {    
    if (payload.length == 0) {
      return [];
    }
    const notifications = [];
    for (const item of payload) {
      const date = covertInputTimeStringToDate(item.when);
      notifications.push({
        key: item.key,
        content: item.content,
        read: item.read === '1',
        time: formatDistanceToNow(date),
      });
    }
    return notifications;
  } catch (err) {
    console.log(err);
    throw new Error('normalizeNotificationAPI failed');
  }
}
