export const initialState = {
  isLogin: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};
export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return { ...state, isLogin: true, me: action.data };
    case 'LOG_IN_SUCCESS':
      return { ...state, isLogin: true, me: action.data };
    case 'LOG_IN_FAILURE':
      return { ...state, isLogin: true, me: action.data };
    case 'LOG_OUT_SUCCESS':
      return { ...state, isLogin: false, me: null };
    case 'LOG_OUT_REQUEST':
      return { ...state, isLogin: false, me: null };
    case 'LOG_OUT_FAILURE':
      return { ...state, isLogin: true, me: null };
    default:
      return state;
  }
};
