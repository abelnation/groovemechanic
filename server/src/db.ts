import * as Knex from "knex";

import {Config} from './config';

export const knex = Knex({
  client: 'pg',
  connection: `${Config.postgres.url}${Config.postgres.useSSL?'?ssl=true':''}`,
});