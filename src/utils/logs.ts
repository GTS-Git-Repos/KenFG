import {logger, consoleTransport} from 'react-native-logs';

export const log = logger.createLogger({
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    colors: 'ansi',
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
});


