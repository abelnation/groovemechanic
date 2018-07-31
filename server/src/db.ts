import * as Knex from "knex";
import * as Sequelize from "sequelize";

import {Config} from './config';

export const sequelize = new Sequelize(`${Config.postgres.url}`, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
})

export const knex = Knex({
  client: 'pg',
  connection: `${Config.postgres.url}?ssl=true`,
});