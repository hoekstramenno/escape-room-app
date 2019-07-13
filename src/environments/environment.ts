import {EnvironmentVariables} from './environment.interface';

export const environment: EnvironmentVariables = {
  production: false,
  self: {
    schema: 'http',
    hostname: 'http://localhost:4200'
  },
  api: {
    schema: 'http',
    hostname: 'scoreboard.test',
    namespace: 'api/v1'
  }
};
