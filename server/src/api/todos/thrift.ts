import { TodoService, Name, Greeting } from '../../thrift/todos';

export const thriftServiceHandlers: TodoService.IHandler<Request> = {

  hello(name: Name): Greeting | Promise<Greeting> {
    return new Greeting({ message: 'Hello' })
  }

};

export const processor: TodoService.Processor = new TodoService.Processor(thriftServiceHandlers);