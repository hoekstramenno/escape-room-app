export const environment = {
  production: true,
  self: {},
  api: {
    schema: 'http',
    hostname: 'scoreboard.test',
    namespace: 'api/v1'
  },
  config: {
    PIN_TIMEOUT_MINUTES: 15,
    PIN_MAX_INVALID_ATTEMPTS: 3
  }
};
