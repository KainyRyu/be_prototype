import {inject} from '@loopback/core';
import {
  get, Request,
  response,
  ResponseObject, RestBindings
} from '@loopback/rest';

/**
 * OpenAPI response for hello()
 */
const hello: ResponseObject = {
  description: 'Greetings from Kainy',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Greeting',
        properties: {
          greeting: {type: 'string'},
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class HelloController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/hello')
  @response(200, hello)
  hello(): object {
    return {
      greeting: 'Hello from Kainy',
    };
  }
}
