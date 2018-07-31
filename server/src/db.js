import * as Sequelize from "sequelize";
import * as knex from "knex";

import {Config} from './config';

export const sequelize = new Sequelize(Config.postgres.url, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
})

export const knex = knex({
  client: 'pg',
  connection: `${Config.postgres.url}?ssl=true`,
});