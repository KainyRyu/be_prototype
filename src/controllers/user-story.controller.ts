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
        CREATED_AT: "2021.02.03 23:55:55",
        UPDATED_AT: "",
        images: [
        ],
        profile: {
          nickname: "김작가",
          image: "https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/253d2/emotion.webp"
        },
        IS_LIKED: true,
        LIKED_CNT: 788,
        COMMENT_CNT: 56,
        STORY_ID: 3,
        IS_CREATOR: true,
        IS_PINNED: false
      },
      {
        contents: "어느새 새해가 밝아 오고 있는데 이렇게나 많은 분들이 기다려 주고 계셔서..",
        CREATED_AT: "2021.12.31 17:05:55",
        UPDATED_AT: "",
        images: [
        ],
        profile: {
          nickname: "김작가",
          image: "https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/253d2/emotion.webp"
        },
        IS_LIKED: false,
        LIKED_CNT: 235,
        COMMENT_CNT: 23,
        STORY_ID: 2,
        IS_CREATOR: true,
        IS_PINNED: true
      },
      {
        contents: "메리 크리스마스! 특전으로 외전이벤트와 설정글 등을 타임라인에 일시적으로 공개합니다",
        CREATED_AT: "2020.12.25 00:05:50",
        UPDATED_AT: "2020.12.25 08:05:23",
        images: [
        ],
        profile: {
          nickname: "김작가",
          image: "https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/253d2/emotion.webp"
        },
        IS_LIKED: false,
        LIKED_CNT: 235,
        COMMENT_CNT: 63,
        STORY_ID: 1,
        IS_CREATOR: true,
        IS_PINNED: false
      },

    ]
  }
}


/**
 * OpenAPI response for User Story()
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
