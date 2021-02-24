export const LOAD_SURAH_DATA = "LOAD_SURAH_DATA";

const initialState = {};

const loadSurahData = (state, action) => {
  const newState = Object.assign({}, state);
  if (newState[action.surahNumber]) {
    if (!newState[action.surahNumber][action.offset]) {
      newState[action.surahNumber][action.offset] = action.data;
    }
  } else {
    newState[action.surahNumber] = {};
    newState[action.surahNumber][action.offset] = action.data;
  }

  return newState;
};

const QuranReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SURAH_DATA:
      return loadSurahData(state, action);
    default:
      return { ...state };
  }
};

export default QuranReducer;
