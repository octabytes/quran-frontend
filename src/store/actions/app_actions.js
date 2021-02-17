import store from "../store";

import { SELECT_SURAH, SELECT_LANGUAGE } from "../reducers/app_reducer";

const selectSurah = (surahNumber) => {
  store.dispatch({
    type: SELECT_SURAH,
    surah: surahNumber,
  });
};

const selectLanguage = (language) => {
  store.dispatch({
    type: SELECT_LANGUAGE,
    language: language,
  });
};

export default {
  selectSurah,
  selectLanguage,
};
