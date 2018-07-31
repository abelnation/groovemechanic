import * as express from 'express';

const PORT = process.env.PORT || 5000

// import {knex} from './db';

express()
  .get('/', (req, res) => res.json({response: 'success'}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))