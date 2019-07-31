import {EnvironmentVariables} from './environment.interface';

export const environment: EnvironmentVariables = {
  production: false,
  self: {
    schema: 'http',
    hostname: 'localhost:8100'
  },
  api: {
    schema: 'http',
    hostname: 'jambo-api.test',
    namespace: 'api/v1'
  },
  config: {
    PIN_TIMEOUT_MINUTES: 15,
    PIN_MAX_INVALID_ATTEMPTS: 3
  }
};
