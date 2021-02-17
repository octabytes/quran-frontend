export const SELECT_SURAH = "SELECT_SURAH";
export const SELECT_LANGUAGE = "SELECT_LANGUAGE";

const initialState = {
  surah: 1,
  language: "english",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SURAH:
      return { ...state, surah: action.surah };
    case SELECT_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return { ...state };
  }
};

export default AppReducer;
