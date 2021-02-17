import { createStore, combineReducers } from "redux";

import AppReducer from "./reducers/app_reducer";
import QuranReducer from "./reducers/quran_reducer";

const reducers = combineReducers({
  app: AppReducer,
  quran: QuranReducer,
});

const store = createStore(reducers);

export default store;
