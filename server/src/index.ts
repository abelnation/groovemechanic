import * as express from 'express';

import {knex} from './db';

const PORT = process.env.PORT || 5000;

const app = express();
app.get('/', (req, res) => res.json({response: 'success'}))
app.get('/todos', async (req, res) => {
  const results = await knex.raw(`
    SELECT * FROM todos;
  `);
  res.json(results);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))