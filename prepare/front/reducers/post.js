export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'messi',
      },
      content: '첫번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://source.unsplash.com/random/1',
        },
        {
          src: 'https://source.unsplash.com/random/2',
        },
        {
          src: 'https://source.unsplash.com/random/3',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'hero',
          },
          content: '안녕하세요.',
        },
        {
          User: {
            nickname: 'goat',
          },
          content: '메갓.',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'messi',
  },
  Images: [],
  Comments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };

    default:
      return state;
  }
};
