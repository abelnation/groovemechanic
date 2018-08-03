import {Environment} from './common/types';

interface IConfig {
  env: Environment;
  server: {
    hostname: string,
    port: number,
  },
  postgres: {
    url: string,
    useSSL: boolean,
  };
}

const env: Environment = process.env.ENV as Environment || "local";
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;

if (env === 'local') {
  require('dotenv').config();
}

function requireEnvVar(envVarName: string) : string {
  if (!process.env[envVarName]) {
    throw new Error(`ENV var not defined: ${envVarName}`)
  }
  return process.env[envVarName] as string;
}

export const Config: IConfig = {
  // local, dev, stage, prod
  env,
  server: {
    hostname: `${requireEnvVar('API_HOST')}`,
    port: port,
  },
  postgres: {
    url: `${requireEnvVar('DATABASE_URL')}`,
    useSSL: env !== 'local',
  },
};
