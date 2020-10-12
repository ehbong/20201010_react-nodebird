export const initialState = { mainPosts: [] };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '':
      return { ...state, ...payload };

    default:
      return state;
  }
};
