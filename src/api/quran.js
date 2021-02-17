import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/v1",
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

export const getAyahListBySurah = async (number) => {
  try {
    const response = await API.get(`/surah/${number}`);
    return response.data;
  } catch (e) {
    console.log("FAILED: unable to perform getAyahListBySurah API");
    console.error(e);
    return e.response && e.response.data;
  }
};

export const getAyahListByCursor = async (cursor) => {
  try {
    const response = await API.get(`/ayah/surah/?cursor=${cursor}`);
    return response.data;
  } catch (e) {
    console.log("FAILED: unable to perform getAyahListByCursor API");
    console.error(e);
    return e.response && e.response.data;
  }
};