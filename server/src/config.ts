import {Environment} from './common/types';

interface IConfig {
  env: Environment;
  postgres: {
    url: string,
  };
}

const env: Environment = process.env.ENV as Environment || "local";
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
  postgres: {
    url: requireEnvVar('DATABASE_URL'),
  }
};
