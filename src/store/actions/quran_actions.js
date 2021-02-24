import store from "../store";
import { LOAD_SURAH_DATA } from "../reducers/quran_reducer";

const loadSurahData = (surahNumber, offset, data) => {
  store.dispatch({
    type: LOAD_SURAH_DATA,
    surahNumber: surahNumber,
    offset: offset,
    data: data,
  });
};

export default {
  loadSurahData,
};
