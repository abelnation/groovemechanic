import { Request, Response, Router } from 'express';

import {knex} from '../../db';
import {asyncHandler} from '../../util/async';

const router: Router = Router();

//
// Todos REST endpoints
//

router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const result = await knex.raw(`
    SELECT * FROM todos;
  `);
  res.json(result.rows);
}));

//
// Todos Thrift Service
//

import { useThrift } from '../../util/thrift';
import { processor as todoProcessor } from './thrift';
useThrift(router, '/thrift', 'TodoService', todoProcessor);

//
// Todos Graphql route
//

// import * as graphqlHTTP from 'express-graphql';
// import { graphql } from 'graphql';
// import { ApolloServer, ServerRegistration } from 'apollo-server-express';
// import { typeDefs, resolvers } from './graphql/schema';

// import todoGqlSchema from './graphql/schema';

// router.post('/graphql', graphqlHTTP({
//   schema: todoGqlSchema,
//   graphiql: false
// }));

// router.get('/graphql', graphqlHTTP({
//   schema: todoGqlSchema,
//   graphiql: true
// }));

// const apolloServer = new ApolloServer({ typeDefs, resolvers });
// apolloServer.applyMiddleware({ app: router, path: '/api/todos/graphql' } as ServerRegistration);

// router.post('/graphql',
//   (bodyParser.text({ type: 'application/graphql' })),
//   (req: Request, res: Response) => {
//     // execute GraphQL!
//     graphql(gqlSchema, req.body)
//     .then((result: any) => {
//       res.send(JSON.stringify(result, null, 2));
//     });
//   }
// );

// router.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql'
// }));

export default router;