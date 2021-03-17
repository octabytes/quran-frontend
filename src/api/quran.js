import axios from "axios";

let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:5000/v1";
} else {
  apiURL = "https://quran-api-dot-islamicnet.appspot.com/v1";
}

const API = axios.create({
  baseURL: apiURL,
});

export const getAyahById = async (id) => {
  try {
    const response = await API.get(`/ayah/${id}`);
    return response.data;
  } catch (e) {
    console.log("FAILED: unable to perform getAyahById API");
    console.error(e);
    return e.response && e.response.data;
  }
};

export const getAyahByNumber = async (number) => {
  try {
    const response = await API.get(`/ayah/number/${number}`);
    return response.data;
  } catch (e) {
    console.log("FAILED: unable to perform getAyahByNumber API");
    console.error(e);
    return e.response && e.response.data;
  }
};

export const getAyahListBySurah = async (number, offset) => {
  try {
    const response = await API.get(`/surah/${number}?offset=${offset}`);
    return response.data;
  } catch (e) {
    console.log("FAILED: unable to perform getAyahListBySurah API");
    console.error(e);
    return e.response && e.response.data;
  }
};
