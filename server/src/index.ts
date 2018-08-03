import * as path from 'path';
import * as express from 'express';
import * as morgan from 'morgan';
import { NextFunction, Request, Response } from 'express';

import { Config } from './config';

import todosApi from './api/todos';

const app = express();

// Request logger
app.use(morgan('tiny'));

// Todos API
app.use('/api/todos', todosApi);

// Serve client/dist to root dir
app.use('/', express.static(path.join(__dirname, '../../client/dist/')));

// Catch-all error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errString = `${err}`;
  console.log(err);
  res.status(500).json({error: errString});
})

app.listen(Config.server.port, () => console.log(`Listening on ${ Config.server.port }`))