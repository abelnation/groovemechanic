import { createHttpClient } from '@creditkarma/thrift-client';

import { TodoService, Name, Greeting } from '../../thrift/todos';

const serviceClient: TodoService.Client = createHttpClient(
  TodoService.Client, {
    hostName: 'localhost',
    port: 5000,
    path: '/api/todos/thrift',
  });

serviceClient.hello(new Name({ name: 'Abel' }))
  .then((greeting: Greeting) => {
    console.log(greeting);
  }).catch(err => {
    console.log(err);
  });