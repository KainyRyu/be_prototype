import {inject} from '@loopback/core';
import {
  get, Request,
  response,
  ResponseObject, RestBindings
} from '@loopback/rest';

const USER_STORY = {
  status: 0,
  data: {
    story: [
      {
        contents: "5번째 작품이 출간되었습니다",
        CREATED_AT: "2016.02.03 23:55:55",
        UPDATED_AT: "2016.05.05 23:55:55",
        images: [
        ],
        profile: {
          nickname: "string",
          image: "string"
        },
        IS_LIKED: true,
        LIKED_CNT: 0,
        COMMENT_CNT: 0,
        STORY_ID: 0,
        IS_CREATOR: true,
        IS_PINNED: true
      }
    ]
  }
}


/**
 * OpenAPI response for hello()
 */
const userStory: ResponseObject = {
  description: 'User Story',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'UserStory',
        properties: {
          status: {type: 'number'},
          data: {
            story: [
              {
                STORY_ID: {type: 'number'},
                contents: {type: 'string'},
                CREATED_AT: {type: 'string'},
                UPDATED_AT: {type: 'string'},
                images: {type: 'array'},
                profile: {
                  nickname: {type: "string"},
                  image: {type: "string"}
                },
                IS_LIKED: {type: 'boolean'},
                LIKED_CNT: {type: 'number'},
                COMMENT_CNT: {type: 'number'},
                IS_CREATOR: {type: 'boolean'},
                IS_PINNED: {type: 'boolean'}
              }
            ]
          }
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

  @get(`/userstory`)
  @response(200, userStory)
  userStory(): object {
    return USER_STORY
  }
}
