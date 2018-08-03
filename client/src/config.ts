import 'react';
import {Environment} from './common/types';

// Values defined by Webpack DefinePlugin
declare var ENV: Environment;
declare var API_HOST: string;
declare var API_PORT: number;

interface IConfig {
  env: Environment;
  api: {
    host: string,
    port: number,
  };
}

export const Config: IConfig = {
  // local, dev, stage, prod
  env: ENV || "local",
  api: {
    host: API_HOST,
    port: API_PORT,
  },
};
