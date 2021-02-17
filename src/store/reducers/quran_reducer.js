export const LOAD_SURAH_DATA = "LOAD_SURAH_DATA";

const initialState = {};

const QuranReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SURAH_DATA:
      return { ...state, [action.surahNumber]: action.data };
    default:
      return { ...state };
  }
};

export default QuranReducer;
