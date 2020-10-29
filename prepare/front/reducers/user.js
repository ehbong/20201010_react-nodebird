export const initialState = {
  isLogin: false,
  isLoggingIn: false,
  isLoggingOut: false,
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
      return { ...state, isLoggingIn: true, me: action.data };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLogin: true,
        isLoggingIn: false,
        me: { ...action.data, nickname: 'messi' },
      };
    case 'LOG_IN_FAILURE':
      return { ...state, isLoggingIn: false, me: action.data };
    case 'LOG_OUT_SUCCESS':
      return { ...state, isLoggingOut: false, isLogin: false, me: null };
    case 'LOG_OUT_REQUEST':
      return { ...state, isLoggingOut: true, me: null };
    case 'LOG_OUT_FAILURE':
      return { ...state, isLoggingOut: false, isLogin: false, me: null };
    default:
      return state;
  }
};
