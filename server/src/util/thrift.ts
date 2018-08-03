import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Router } from 'express';
import { ThriftServerExpress } from '@creditkarma/thrift-server-express'
import { IThriftProcessor } from '@creditkarma/thrift-server-core';

/**
 * Convenience function for hooking a thrift processor up to an express router
 *
 * @param router
 * @param path
 * @param processor
 */
export function useThrift<TProcessor extends IThriftProcessor<express.Request>>(
  router: Router,
  path: string,
  serviceName: string,
  processor: TProcessor,
) {
  router.use('/thrift',
    bodyParser.raw(),
    ThriftServerExpress({ serviceName, handler: processor })
  );
}

