const initiliazeState = {
  user: {},
  isLoading: false,
  success: false,
  error: false,
};

export const rootReducer = (state = initiliazeState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.value,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    case "SET_SUCCESS":
      return {
        ...state,
        success: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.value,
      };

    default:
      return state;
  }
};
